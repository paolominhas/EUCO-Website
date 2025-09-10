import React from 'react';
import { Link } from 'react-router-dom';

// Import the SVG logos
import { ReactComponent as OrchestraLogo } from '../logos/euco-logo.svg';
import { ReactComponent as UoELogo } from '../logos/UoE-logo.svg';

const EducationFooter = () => {
  return (
    <footer className="bg-black mt-16 py-8 border-t-2 border-rose-600/30">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <div className="flex justify-center items-center space-x-6 mb-4">
          
          {/* --- NEW: EUCO Logo link back to the main homepage --- */}
          <Link to="/" aria-label="Back to main homepage" className="text-gray-400 hover:text-white transition-colors duration-300">
            <OrchestraLogo className="h-8 w-auto"/>
          </Link>

          <a href="https://www.ed.ac.uk" target="_blank" rel="noopener noreferrer" aria-label="University of Edinburgh" className="text-gray-400 hover:text-white transition-colors duration-300">
            <UoELogo className="h-8 w-auto"/>
          </a>

          {/* Social media links remain the same */}
          <a href="https://www.instagram.com/edunichamberorchestra/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors duration-300">
             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919 4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"></path></svg>
          </a>
          <a href="https://www.facebook.com/EdinburghUniversityChamberOrchestra" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z"></path></svg>
          </a>
        </div>
        <p>© {new Date().getFullYear()} Edinburgh University Chamber Orchestra. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default EducationFooter;