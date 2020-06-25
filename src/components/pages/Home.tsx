import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <>
      <h1 className="text-blue-500 text-lg font-bold p-3">Home</h1>
      <Link to="/about" className="ml-3">
        About
      </Link>
    </>
  );
};
