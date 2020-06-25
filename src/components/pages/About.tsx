import React from 'react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <>
      <h1 className="text-green-500 text-lg font-bold p-3">About</h1>
      <Link to="/" className="ml-3">
        Home
      </Link>
    </>
  );
};
