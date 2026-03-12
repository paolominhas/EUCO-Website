import React, { useEffect } from 'react';

const InstagramFeedSection = () => {
  useEffect(() => {
    // This adds the Elfsight script to the page
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute('data-use-service-core', '');
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">Follow Our Journey</h2>
        {/* This is the div Elfsight tells you to create. Paste your unique ID here. */}
        {/* Elfsight Instagram Feed | EUCO Instagram Feed */}
        <script src="https://elfsightcdn.com/platform.js" async></script>
        <div className="elfsight-app-4a0281d3-065d-413f-98bd-030728c8c9e8" data-elfsight-app-lazy></div>
      </div>
    </div>
  );
};

export default InstagramFeedSection;