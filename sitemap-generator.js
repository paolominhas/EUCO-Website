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

/**
 * == IMPORTANT! ==
 * Manually define your video metadata here.
 * - fileName: The name of the video file in /public/videos.
 * - pagePath: The route where this video appears (e.g., '/concerts').
 * - thumbnailName: The name of the thumbnail image in /public/images/thumbnails.
 * - duration: The video duration in seconds.
 */
const videoMetadata = [
  {
    fileName: 'opera-background.webm',
    pagePath: '/about/opera',
    title: 'EUCO 2025-26 Season Preview',
    description: 'An interview of our conductor Will Conway discussing the making iof our annual opera production.',
    thumbnailName: 'Cello.jpg',
    duration: 125, // in seconds (e.g., 2 minutes 5 seconds)
  }
];

// ====================================================================
// ======================== HELPER FUNCTIONS ==========================
// ====================================================================

/**
 * Scans a directory for files of a certain type and returns their full URLs.
 * @param {string} dirPath - The path to the directory (e.g., 'public/images').
 * @param {string[]} allowedExtensions - An array of file extensions to include (e.g., ['.jpg', '.png']).
 * @returns {string[]} An array of full URLs for the found files.
 */
function getFilesFromDir(dirPath, allowedExtensions) {
  const directory = path.join(__dirname, dirPath);
  if (!fs.existsSync(directory)) return [];
  
  const files = fs.readdirSync(directory);
  return files
    .filter(file => allowedExtensions.some(ext => file.endsWith(ext)))
    .map(file => `${hostname}/${path.join(dirPath.replace('public/', ''), file)}`);
}

// ====================================================================
// ========================= MAIN SCRIPT ==============================
// ====================================================================

async function generateSitemap() {
  console.log('Generating sitemap...');

  // 1. Find all media files
  const imageFiles = getFilesFromDir('public/images', ['.jpg', '.jpeg', '.png', '.webp']);
  const backgroundFiles = getFilesFromDir('public/backgrounds', ['.jpg', '.jpeg', '.png']);
  const conductorFiles = getFilesFromDir('public/conductors', ['.jpg', '.jpeg', '.png']);

  // 2. Define page-to-media associations
  // Here, we manually associate pages with the images that appear on them.
  const links = routePaths.map(path => {
    const link = { url: path, changefreq: 'daily', priority: 0.7, img: [], video: [] };

    // Add images based on the page path
    switch (path) {
      case '/':
        link.priority = 1.0;
        link.img.push({ url: `${hostname}/images/orchestra-hero.jpg`, title: 'The Edinburgh University Chamber Orchestra performing' });
        break;
      case '/about':
        link.img.push({ url: `${hostname}/images/PhillipClose.jpg`, title: 'About the Orchestra' });
        link.img.push({ url: `${hostname}/backgrounds/stringers-shop.jpg`, title: 'Our sponsor Stringers of Edinburgh' });
        break;
      case '/about/conductors': // Example of adding a whole folder of images to a page
        conductorFiles.forEach(fileUrl => {
          const conductorName = path.basename(fileUrl, path.extname(fileUrl)).replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase());
          link.img.push({ url: fileUrl, title: `Conductor: ${conductorName}` });
        });
        break;
      case '/outreach':
        link.img.push({ url: `${hostname}/images/community.jpg`, title: 'EUCO Community Outreach Programme' });
        break;
    }
    return link;
  });

  // 3. Add video data to the associated pages
  videoMetadata.forEach(video => {
    const pageLink = links.find(link => link.url === video.pagePath);
    if (pageLink) {
      pageLink.video.push({
        title: video.title,
        description: video.description,
        thumbnail_loc: `${hostname}/images/thumbnails/${video.thumbnailName}`,
        content_loc: `${hostname}/videos/${video.fileName}`,
        duration: video.duration,
      });
    }
  });

  // 4. Generate the XML
  const stream = new SitemapStream({ hostname });
  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then(data => data.toString());

  fs.writeFileSync('./public/sitemap.xml', xml);
  
  console.log('Sitemap generated successfully at ./public/sitemap.xml!');
}

generateSitemap();