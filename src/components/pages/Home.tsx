import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const features = [
    {
      name: 'React',
      url: 'https://github.com/facebook/react',
    },
    {
      name: 'React Router',
      url: 'https://github.com/ReactTraining/react-router',
    },
    {
      name: 'TypeScript',
      url: 'https://github.com/Microsoft/TypeScript',
    },
    {
      name: 'webpack',
      url: 'https://github.com/webpack/webpack',
    },
    {
      name: 'PostCSS',
      url: 'https://github.com/postcss/postcss',
    },
    {
      name: 'Prettier',
      url: 'https://github.com/prettier/prettier',
    },
    {
      name: 'Tailwind CSS',
      url: 'https://github.com/tailwindcss/tailwindcss',
    },
    {
      name: 'PurgeCSS',
      url: 'https://github.com/FullHuman/purgecss',
    },
    {
      name: 'styled-components',
      url: 'https://github.com/styled-components/styled-components',
    },
    {
      name: 'axios',
      url: 'https://github.com/axios/axios',
    },
  ] as const;

  return (
    <>
      <div className="max-w-screen-md mx-auto mt-6 p-3">
        <li>
          <Link to="/about">About</Link>
        </li>
        <div className="text-center mt-32">
          <h1 className="text-5xl font-bold text-teal-900">Hello, React!</h1>
        </div>
        <div className="mt-32">
          {features.map(({ name, url }) => (
            <li>
              <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                {name}
              </a>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};
