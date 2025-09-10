import React from 'react';
import { Outlet } from 'react-router-dom';
/*import Header from './Header'; // Uses the same intelligent Header */
import EducationFooter from './EducationFooter'; // Uses our new, special footer

const EducationLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Outlet />
      </main>
      <EducationFooter />
    </>
  );
};

export default EducationLayout;