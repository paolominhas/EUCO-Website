import React from 'react';

/**
 * A reusable component for creating a standard content section.
 * @param {object} props - The component's properties.
 * @param {string} props.title - The title to be displayed in a styled h2 tag.
 * @param {React.ReactNode} props.children - The content to be rendered inside the section.
 * @param {string} [props.className] - Optional additional CSS classes to apply to the section container.
 */
const Section = ({ title, children, className = '' }) => {
  return (
    // The main container div. It has vertical and horizontal padding.
    // The incoming 'className' prop is added here for custom styling.
    <div className={`py-12 md:py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      
      {/* An inner container that is centered and has a max-width */}
      <div className="container mx-auto">
        
        {/* The section title, which is passed in via the 'title' prop */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-rose-400 mb-10">
          {title}
        </h2>

        {/* 'children' is a special prop in React. It renders whatever
            is nested inside the <Section> component when you use it. */}
        {children}

      </div>
    </div>
  );
};

export default Section;