import React from 'react';

const Center = ({ 
  children, 
  className = '', 
  maxWidth = '1300px',
  padding = 'px-4 lg:px-0',
  ...props 
}) => {
  return (
    <div 
      className={`w-full flex justify-center ${className}`}
      {...props}
    >
      <div 
        className={`w-full ${padding}`}
        style={{ maxWidth }}
      >
        {children}
      </div>
    </div>
  );
};

export default Center;
