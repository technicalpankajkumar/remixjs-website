import React from 'react';

interface HeadingProps {
  level: number; 
  children: React.ReactNode;
  className?:string;
}

// Define a type for the classes mapping
type HeadingClasses = {
  [key in 1 | 2 | 3 | 4 | 5 | 6 | 7]: string; // Keys are 1 to 7, values are strings
};

const Heading: React.FC<HeadingProps> = ({ level,className, children }) => {
  // Ensure the level is between 1 and 7
  const headingLevel = Math.max(1, Math.min(level, 7)) as 1 | 2 | 3 | 4 | 5 | 6 | 7; // Cast to the specific type

  // Define default Tailwind CSS classes for each heading level with responsive sizes
  const classes: HeadingClasses = {
    1: 'text-4xl md:text-5xl lg:text-6xl font-bold', // h1
    2: 'text-3xl md:text-4xl lg:text-5xl font-bold', // h2
    3: 'text-2xl md:text-3xl lg:text-4xl font-semibold', // h3
    4: 'text-xl md:text-2xl lg:text-3xl font-semibold', // h4
    5: 'text-lg md:text-xl lg:text-2xl font-medium', // h5
    6: 'text-base md:text-lg lg:text-xl font-medium', // h6
    7: 'text-sm md:text-base lg:text-lg font-normal', // h7
  };

  // Create the heading element dynamically
  const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  return React.createElement(HeadingTag, { className: `${classes[headingLevel]} tracking-tight leading-tight text-slate-800 dark:text-white py-2 ${className || ""}` }, children);
};

export default Heading;