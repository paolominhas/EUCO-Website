import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import '../App.css';

// Import the SVG logo
import { ReactComponent as OrchestraLogo } from '../logos/euco-logo.svg';

// A more robust navItems structure with explicit paths
const navItems = [ 
    { name: 'Home', path: '/' },
    { name: 'Education', path: '/education' },
    { 
      name: 'About', 
      path: '/about',
      dropdown: [ 
        { name: 'Our Story', path: '/about/our-story' }, 
        { name: 'Auditions', path: '/about/auditions' }, 
        { name: 'Conductors', path: '/about/conductors' }, 
        { name: 'Opera', path: '/about/opera' }, 
        { name: 'Concerto Competition', path: '/about/concerto-competition' } 
      ] 
    }, 
    { 
      name: 'Concerts', 
      path: '/concerts',
      dropdown: [ 
        { name: 'Performances', path: '/concerts/performances' }, 
        { name: 'Outreach', path: '/concerts/outreach' }, 
        { name: 'Events', path: '/concerts/events' } 
      ] 
    }, 
    { 
      name: 'Contact Us', 
      path: '/contact-us',
      dropdown: [ 
        { name: 'Contact Us Directly', path: '/contact-us/direct' }, 
        { name: 'FAQ', path: '/contact-us/faq' } 
      ] 
    }, 
    { 
      name: 'Support Us', 
      path: '/support-us',
      dropdown: [ 
        { name: 'Our Partners', path: '/support-us/sponsors' }, 
        { name: 'Sponsorship', path: '/support-us/donate' } 
      ] 
    } 
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isEducationPage = location.pathname.startsWith('/education');

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-black bg-opacity-80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-rose-600/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* --- CORRECTED LOGO AND TITLE SECTION --- */}
          {/* This is now a simple div for layout, not a Link */}
          <div className="flex items-center text-xl md:text-2xl font-bold text-rose-400">
            
            {/* LINK 1: The Logo. This ALWAYS links to the homepage. */}
            <Link to="/" aria-label="Back to homepage">
              <OrchestraLogo 
                className={
                  `h-10 w-10 mr-3 logo-animated 
                  ${isEducationPage ? 'euco-logo-white' : 'euco-logo-pink'}` // <-- This is the logic that switches the color
                }
              />
            </Link>

            {/* LINK 2: The Title. This link is conditional. */}
            <Link to={isEducationPage ? "/education" : "/"}>
              <span className={isEducationPage ? "text-white" : "text-rose-400"}>
                {isEducationPage 
                  ? 'Edinburgh University Chamber Orchestra Education Hub'
                  : 'Edinburgh University Chamber Orchestra'}
              </span>
            </Link>

          </div>
          
          {/* --- Main Navigation (Hidden on Education page) --- */}
          {!isEducationPage && (
            <>
              {/* Desktop Nav */}
              <div className="hidden md:flex items-center space-x-2">
                {navItems.map(item => (
                  <div key={item.name} className="relative group py-2">
                    {item.dropdown ? (
                      <>
                        <NavLink to={item.path} className={({ isActive }) => `px-4 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-rose-600/80 text-black' : 'text-gray-300 group-hover:bg-gray-700'}`}>
                          {item.name}
                        </NavLink>
                        <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 hidden group-hover:block z-10">
                          {item.dropdown.map(subItem => (
                            <Link key={subItem.name} to={subItem.path} className="block px-4 py-2 text-sm text-gray-300 hover:bg-rose-600 hover:text-black">
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <NavLink to={item.path} className={({ isActive }) => `px-4 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-rose-600 text-black' : 'text-gray-300 hover:bg-gray-700'}`}>
                        {item.name}
                      </NavLink>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
                </button>
              </div>
            </>
          )}
        </div>

        {/* --- Mobile Menu Panel (Hidden on Education page) --- */}
        {!isEducationPage && isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-2">
            {navItems.map(item => item.dropdown ? (
              <div key={item.name}>
                <h3 className="px-4 pt-2 pb-1 text-sm font-semibold text-rose-400">
                  <Link to={item.path} onClick={closeMenu}>{item.name}</Link>
                </h3>
                {item.dropdown.map(subItem => (
                  <Link key={subItem.name} to={subItem.path} onClick={closeMenu} className="block px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">{subItem.name}</Link>
                ))}
              </div>
            ) : (
              <NavLink key={item.name} to={item.path} onClick={closeMenu} className={({ isActive }) => `block px-4 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-rose-600 text-black' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>{item.name}</NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;