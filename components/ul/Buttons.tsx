'use client';
import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-6 py-3 bg-black text-white font-bold uppercase rounded-md shadow-md hover:bg-gray-900 transition-colors"
    >
      {text}
    </button>
  );
};

export default Button;
