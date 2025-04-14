import React from 'react';

interface paragraphProps {
  level: number; 
  children: React.ReactNode;
  className?:string;
}

// Define a type for the classes mapping
type PragraphClass = {
  [key in 1 | 2 | 3]: string; // Keys are 1 to 7, values are strings
};

const Paragraph: React.FC<paragraphProps> = ({ level,className, children }) => {
  // Ensure the level is between 1 and 7
  const ParagraphLable = Math.max(1, Math.min(level, 3)) as 1 | 2 | 3 ; // Cast to the specific type

  // Define default Tailwind CSS classes for each Paragraph level with responsive sizes
  const classes: PragraphClass = {
    1: 'text-base md:text-lg lg:text-xl', // h1
    2: 'text-sm md:text-base lg:text-lg', // h2
    3: 'text-xs md:text-sm lg:text-base ', // h3
  };

  // Create the Paragraph element dynamically
  const ParagraphTag = `h${ParagraphLable}` as keyof JSX.IntrinsicElements;

  return React.createElement(ParagraphTag, { className: `${classes[ParagraphLable]} tracking-tight leading-tight leading-6 text-slate-500 dark:text-white py-2 text-justify  ${className || ""}` }, children);
};

export default Paragraph;