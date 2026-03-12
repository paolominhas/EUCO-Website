import React, { useState, useEffect } from 'react';
import { Link, NavLink /*, useLocation*/ } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import '../BurgerMenu.css'; 
import { ReactComponent as OrchestraLogo } from '../logos/euco-logo.svg';

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
        { name: 'Upcoming', path: '/concerts/upcoming' }, 
        { name: 'Past', path: '/concerts/past' }, 
        { name: 'Outreach', path: '/concerts/outreach' } 
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

const committeeData = [
    { role: 'President', name: 'Srishti Ramakrishnan' },
    { role: 'Treasurer', name: 'Huan Xu' },
    { role: 'Secretary', name: 'Katie Rawson' },
    { role: 'Librarian', name: 'Lauren Mooney' },
    { role: 'Publicity', name: 'Lou Stiles' },
    { role: 'Social', name: 'Daniel Cook' },
    { role: 'Fundraising & Alumni', name: 'Paolo Minhas' },
    // ... add all other committee members
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const location = useLocation();
  // const isEducationPage = location.pathname.startsWith('/education');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStateChange = (state) => {
    setIsMenuOpen(state.isOpen);
  };
  
  const closeMenu = () => setIsMenuOpen(false);

  // --- Full Screen Web Menu Overlay Component ---
  const WebMenuOverlay = () => (
    <div 
      className={`fixed inset-0 bg-black z-40 transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <button onClick={closeMenu} className="absolute top-8 right-8 text-white z-50">
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>

      {/* Two-column grid for the new layout */}
      <div className="container mx-auto h-full grid md:grid-cols-2 items-center">
        
        {/* Column 1: Left-aligned Navigation */}
        <nav className="flex flex-col items-start space-y-4 p-8">
          {navItems.map(item => (
            <div key={item.name} className="text-left">
              <NavLink to={item.path} onClick={closeMenu} className="text-5xl font-extrabold text-gray-400 hover:text-white transition-colors duration-300">
                {item.name}
              </NavLink>
              <div className="mt-2 space-y-2">
                {item.dropdown && item.dropdown.map(subItem => (
                  <NavLink key={subItem.name} to={subItem.path} onClick={closeMenu} className="block text-xl text-gray-500 hover:text-blue-400 transition-colors">
                    {subItem.name}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Column 2: Rotating Logo and Committee List */}
        <div className="flex flex-col justify-center items-center p-8">
          <OrchestraLogo className="w-64 h-64 text-white logo-rotate" />
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">2025/26 Committee</h3>
            <ul className="text-gray-400">
              {committeeData.map(member => (
                <li key={member.role}>
                  <span className="font-bold">{member.role}:</span> {member.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );


  return (
    <>
      {/* --- MOBILE & DESKTOP MENUS --- */}
      {/* The actual menu logic is now outside the visible headers */}
      <div className="md:hidden">
        <Menu 
          right 
          isOpen={isMenuOpen}
          onStateChange={handleStateChange}
        >
          {navItems.map(item => (
            <div key={item.name} className="py-2">
              <NavLink to={item.path} onClick={closeMenu} className="menu-main-link">
                {item.name}
              </NavLink>
              {item.dropdown && item.dropdown.map(subItem => (
                <NavLink key={subItem.name} to={subItem.path} onClick={closeMenu} className="menu-sub-link">
                  {subItem.name}
                </NavLink>
              ))}
            </div>
          ))}
          <div className="mt-8 border-t border-gray-700 pt-4">
            <p className="text-gray-400 text-center">Follow Us</p>
            {/* Add social links here */}
          </div>
        </Menu>
      </div>

      <div className="hidden md:block">
        <WebMenuOverlay />
      </div>

      {/* --- VISIBLE HEADERS --- */}

      {/* Combined Mobile & Desktop Header Logic */}
      <header className="sticky top-0 z-30">
        
        {/* Mobile Header Bar (only visible on mobile) */}
        <div className="md:hidden bg-black py-3 px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <OrchestraLogo className="h-12 w-12 logo-animated euco-logo-pink"/>
            <span className="font-bold text-xl text-blue-400">Edinburgh University <br /> Chamber Orchestra</span>
          </Link>
          {/* The burger button is rendered by the Menu component, styled by BurgerMenu.css */}
        </div>
        
        {/* Desktop Headers (Initial and Scrolled) */}
        <div className="hidden md:block">
          {/* Initial Header */}
          <div className={`absolute top-0 left-0 right-0 transition-transform duration-300 ease-in-out ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
            <div className="bg-black bg-opacity-80 backdrop-blur-sm shadow-lg shadow-blue-600/10">
              <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
                <Link to="/" className="flex items-center text-2xl font-bold text-blue-400">
                  <OrchestraLogo className="h-12 w-12 mr-4 logo-animated euco-logo-pink"/>
                  <span>Edinburgh University Chamber Orchestra</span>
                </Link>
                <div className="flex items-center space-x-2">
                  {navItems.map(item => (
                    <div key={item.name} className="relative group py-2">
                      <NavLink to={item.path} className={({ isActive }) => `px-4 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-blue-600/80 text-black' : 'text-gray-300 group-hover:bg-gray-700'}`}>
                        {item.name}
                      </NavLink>
                      <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 hidden group-hover:block z-10">
                        {item.dropdown && item.dropdown.map(subItem => (
                          <Link key={subItem.name} to={subItem.path} className="block px-4 py-2 text-sm text-gray-300 hover:bg-blue-600 hover:text-black">
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </nav>
            </div>
          </div>

          {/* Scrolled Header */}
          <div className={`fixed top-0 left-0 right-0 transition-transform duration-300 ease-in-out ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="bg-gradient-to-b from-black to-transparent">
              <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
                <Link to="/" aria-label="Back to homepage">
                  <OrchestraLogo className="h-24 w-24 logo-animated euco-logo-pink"/>
                </Link>
                <button onClick={() => setIsMenuOpen(true)} className="text-gray-300 hover:text-white focus:outline-none">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* This is a placeholder for your page content. The sticky header needs content to scroll over. */}
      {/* <main style={{ height: '200vh', background: 'lightgray' }}></main> */}
    </>
  );
};

export default Header;