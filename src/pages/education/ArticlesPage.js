import React from 'react';
import Section from '../../components/Section';
import Header from '../../components/Header';
import { articles } from '../../data/educationData';

const ArticlesPage = () => {
  // In a real blog, you would fetch a list of articles. Here we use our mock data.
  const ravelArticle = articles[0];

  return (
    <>
      <title>Articles | EUCO Education Hub</title>
      <Header />
      <main>
        <Section title="Articles">
            {/* This is a placeholder for a blog feed. For now, we'll just display the one article */}
            <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-rose-400">{ravelArticle.title}</h2>
                <p className="text-gray-400 my-2">By {ravelArticle.author} on {ravelArticle.date}</p>
                <p className="text-lg text-gray-300 leading-relaxed my-6">{ravelArticle.excerpt}</p>

                <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Listen: Le Tombeau de Couperin - Prélude</h3>
                {/* Example of an embedded YouTube video */}
                <div className="aspect-w-16 aspect-h-9">
                    <iframe className="w-full h-full rounded-lg" src="https://www.youtube.com/embed/jbLMhyR-UVQ?si=sDz9DWgtVvcO5M_-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Audio Snippet: Prélude</h3>
                
                {/* --- THIS IS THE NEW SPOTIFY EMBED --- */}
                {/* We've taken the code from Spotify and made it JSX-compatible. */}
                <iframe
                    style={{borderRadius: "12px"}}
                    src="https://open.spotify.com/embed/track/0IJyrynPTYBy7FpWX5UXc3?utm_source=generator&theme=0" 
                    width="100%" 
                    height="152" 
                    frameBorder="0" 
                    allowFullScreen="" // This can be left as-is or changed to allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                    title="Spotify Player for Ravel's Le Tombeau de Couperin - Prélude" // It's good practice to add a title for accessibility
                ></iframe>
            </div>
        </Section>
      </main>
    </>
  );
};

export default ArticlesPage;