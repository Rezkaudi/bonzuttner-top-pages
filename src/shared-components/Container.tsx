import React from 'react';

interface ContainerProps {
  children?: React.ReactNode,
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`flex flex-col px-6 lg:px-28 w-full relative flex-nowrap items-start justify-between mx-auto mb-5 ${className}`}>
      {children}
    </div>
  );
};

export default Container;