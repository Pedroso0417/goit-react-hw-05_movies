// Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.Header}>
      <div className={css.Logo}>
        <Link to="/">Movie App</Link>
      </div>
      <nav className={css.Nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
