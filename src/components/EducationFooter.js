import React from 'react';
import { Link } from 'react-router-dom';

// Import the SVG logos
import { ReactComponent as OrchestraLogo } from '../logos/euco-logo.svg';
import { ReactComponent as UoELogo } from '../logos/UoE-logo.svg';
import { ReactComponent as InstaIcon } from '../logos/insta.svg';
import { ReactComponent as FacebookIcon } from '../logos/facebook.svg';
import { ReactComponent as EUSAIcon } from '../logos/eusa-logo.svg';
import { ReactComponent as StringersIcon } from '../logos/stringers-logo.svg';

const EducationFooter = () => {
  return (
    <footer className="bg-black mt-16 py-8 border-t-2 border-blue-600/30">
      <div className="container mx-auto px-6 text-center text-gray-400">
        
        {/* --- Sponsors Section --- */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-400 mb-4 hover:text-white transition-colors duration-300">
              Proudly sponsored by Stringers of Edinburgh:
            </h3>
            <a 
              href="https://www.stringersedinburgh.com/" 
              target="_blank"
              rel="noopener noreferrer" 
              aria-label="Stringers Music"
              className="inline-block text-gray-400 hover:text-white transition-colors duration-300"
            >
              <StringersIcon className="h-12 w-auto mx-auto" />
            </a>
          </div>
        
        <div className="flex justify-center items-center space-x-6 mb-4">

          {/* --- Socials and University Section --- */}
            <div className="flex justify-center items-center space-x-6 mb-4">
              
              <Link to="/" aria-label="Back to main homepage" className="text-gray-400 hover:text-white transition-colors duration-300">
                <OrchestraLogo className="h-12 w-auto"/>
              </Link>

              <a 
                href="https://www.eusa.ed.ac.uk/activities/view/edinburgh-university-chamber-orchestra" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Edinburgh University Students' Association" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <EUSAIcon className="w-12 h-12" />
              </a>
    
              <a 
                href="https://www.ed.ac.uk" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="University of Edinburgh" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <UoELogo className="h-8 w-auto"/>
              </a>
              
              <a 
                href="https://www.instagram.com/edunichamberorchestra/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <InstaIcon className="w-6 h-6" />
              </a>
              
              <a 
                href="https://www.facebook.com/EdinburghUniversityChamberOrchestra" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FacebookIcon className="w-6 h-6" />
              </a>
            </div>
        </div>
        <p className="text-gray-400 hover:text-white transition-colors duration-300">© {new Date().getFullYear()} Edinburgh University Chamber Orchestra. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default EducationFooter;