require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const { routePaths } = require('./src/route-paths'); // Your static routes

// ====================================================================
// ========================= CONFIGURATION ============================
// ====================================================================

const hostname = 'https://www.eu-co.co.uk';

// Define the folders you want to scan
const imageFolders = [
  'backgrounds',
  'composerheads',
  'conductors',
  'favicon',
  'gallery',
  'images'
];

// Supported image extensions
const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.svg', '.gif'];

/**
 * Video Metadata Configuration
 */
const videoMetadata = [
  {
    fileName: 'opera-background.webm',
    pagePath: '/about/opera',
    title: 'EUCO 2025-26 Season Preview',
    description: 'An interview of our conductor Will Conway discussing the making of our annual opera production.',
    thumbnailName: 'Cello.jpg',
    duration: 125, 
  }
];

// ====================================================================
// ======================== HELPER FUNCTIONS ==========================
// ====================================================================

/**
 * Scans a directory for files and returns their web-accessible URLs and filenames.
 */
function getImagesFromDir(folderName) {
  const dirPath = path.join(__dirname, 'public', folderName);
  
  if (!fs.existsSync(dirPath)) {
    console.warn(`Warning: Directory not found: ${dirPath}`);
    return [];
  }

  const files = fs.readdirSync(dirPath);
  
  return files
    .filter(file => allowedExtensions.some(ext => file.toLowerCase().endsWith(ext)))
    .map(file => {
      // Create a clean title from the filename (e.g., "philip-higham.jpg" -> "Philip Higham")
      const title = file
        .replace(/\.[^/.]+$/, "") // Remove extension
        .replace(/-/g, ' ')       // Replace dashes with spaces
        .replace(/_/g, ' ')       // Replace underscores with spaces
        .replace(/\b\w/g, l => l.toUpperCase()); // Capitalize first letter of each word

      return {
        url: `${hostname}/${folderName}/${file}`,
        title: title,
        caption: title // Google uses caption as well
      };
    });
}

// ====================================================================
// ========================= MAIN SCRIPT ==============================
// ====================================================================

async function generateSitemap() {
  console.log('Generating sitemap...');

  // 1. Harvest all images from the specific folders
  const allImages = {};
  imageFolders.forEach(folder => {
    allImages[folder] = getImagesFromDir(folder);
    console.log(`Found ${allImages[folder].length} images in /public/${folder}`);
  });

  // 2. Build the Sitemap Links
  const links = routePaths.map(route => {
    const pageData = { 
      url: route, 
      changefreq: 'weekly', 
      priority: 0.7, 
      img: [], 
      video: [] 
    };

    // --- SMART IMAGE ASSOCIATION LOGIC ---
    // We try to attach images to the most relevant page.

    // A. CONDUCTORS PAGE: Add all images from /conductors
    if (route === '/about/conductors') {
      pageData.img.push(...allImages['conductors']);
    }

    // B. GALLERY / MEDIA PAGE: Add all images from /gallery
    // (Assuming you have a route like '/media' or '/gallery')
    else if (route === '/concerts') {
      pageData.img.push(...allImages['gallery']);
    }

    // C. COMPOSER HEADS: Likely used on repertoire or concerts pages
    else if (route === '/education' || route === '/education/composers') {
      pageData.img.push(...allImages['composerheads']);
    }

    // D. ABOUT PAGES: Add general images
    else if (route === '/about' || route === '/about/our-story') {
      // Filter for specific images we know are in the /images folder
      const relevantImages = allImages['images'].filter(img => 
        img.url.includes('PhillipClose') || 
        img.url.includes('orchestra') ||
        img.url.includes('group')
      );
      pageData.img.push(...relevantImages);
    }

    // E. HOME PAGE: The "Catch-All"
    // If an image hasn't been specifically assigned, we can dump common assets 
    // like backgrounds and favicons here so Google still crawls them.
    else if (route === '/') {
      pageData.priority = 1.0;
      pageData.changefreq = 'daily';
      
      // Add backgrounds
      pageData.img.push(...allImages['backgrounds']);
      
      // Add general images (that weren't specific to about)
      pageData.img.push(...allImages['images']);
      
      // Add favicons (technically images, good for indexing logo variants)
      pageData.img.push(...allImages['favicon']);
    }

    // --- VIDEO ASSOCIATION ---
    // Add videos to their specific pages
    const relevantVideos = videoMetadata.filter(v => v.pagePath === route);
    relevantVideos.forEach(video => {
      pageData.video.push({
        title: video.title,
        description: video.description,
        thumbnail_loc: `${hostname}/images/${video.thumbnailName}`, // Assuming thumbnails are in /public/images
        content_loc: `${hostname}/videos/${video.fileName}`,
        duration: video.duration,
        family_friendly: 'yes',
        live: 'no'
      });
    });

    return pageData;
  });

  // 3. Generate XML
  const stream = new SitemapStream({ hostname });
  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then(data => data.toString());

  // 4. Write to file
  fs.writeFileSync('./public/sitemap.xml', xml);
  
  console.log('✅ Sitemap generated successfully at ./public/sitemap.xml');
  console.log(`   Included ${links.length} pages.`);
}

generateSitemap().catch(err => {
  console.error("Error generating sitemap:", err);
});