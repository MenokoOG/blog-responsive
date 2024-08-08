// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="bg-blue-500 dark:bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white dark:text-gray-300 text-xl font-bold">My Blog</div>
        <div className="space-x-4">
          <Link to="/" className="text-white dark:text-gray-300 hover:text-gray-200">Home</Link>
          <Link to="/about" className="text-white dark:text-gray-300 hover:text-gray-200">About</Link>
          <Link to="/blog" className="text-white dark:text-gray-300 hover:text-gray-200">Blog</Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-800 text-white dark:bg-gray-700 dark:text-gray-300 px-2 py-1 rounded"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
