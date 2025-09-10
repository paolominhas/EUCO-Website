require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const { routePaths } = require('./src/route-paths'); // Import your routes

// Your website's base URL
const hostname = 'https://www.eu-co.co.uk';

// An array of your static routes
const links = routePaths.map(path => ({ url: path, changefreq: 'daily', priority: 0.7 }));

// --- Handling Dynamic Routes (e.g., /blog/:slug) ---
// If you have dynamic routes, you need to fetch them from your API/database
// and add them to the 'links' array.
// Example:
// async function fetchBlogPosts() {
//   const response = await fetch('https://api.yourdomain.com/posts');
//   const posts = await response.json();
//   return posts.map(post => ({ url: `/blog/${post.slug}`, changefreq: 'weekly', priority: 0.8 }));
// }
// ---------------------------------------------------


async function generateSitemap() {
  console.log('Generating sitemap...');
  
  // Uncomment the line below if you have dynamic routes
  // const dynamicLinks = await fetchBlogPosts();
  // const allLinks = [...links, ...dynamicLinks];

  // Use 'links' if you only have static routes
  const allLinks = links;

  const stream = new SitemapStream({ hostname });
  const xml = await streamToPromise(Readable.from(allLinks).pipe(stream)).then(data => data.toString());

  fs.writeFileSync('./public/sitemap.xml', xml);
  
  console.log('Sitemap generated successfully!');
}

generateSitemap();