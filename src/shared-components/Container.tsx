import React from 'react';

interface ContainerProps {
  children?: React.ReactNode,
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`flex flex-col flex-nowrap items-start justify-between px-6 lg:px-28 w-full relative  mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;