import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  additionalClasses?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  additionalClasses = '',
}) => {
  // Use additionalClasses prop to allow passing custom Tailwind classes
  const buttonClasses = `bg-blue-500 text-white font-bold py-2 px-4 rounded-full ${additionalClasses}`;

  return (
    <button className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;