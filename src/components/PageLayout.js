import React from 'react';
import { Outlet } from 'react-router-dom';

// Import your main layout components
import Header from './Header';
import Footer from './Footer';

/**
 * A layout component that provides the standard Header and Footer wrapper.
 * Child routes defined within it in App.js will be rendered in the <Outlet />.
 */
const PageLayout = () => {
  return (
    <>
      <Header />
      <main>
        {/* The Outlet component from react-router-dom renders the matched child route's component */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PageLayout;