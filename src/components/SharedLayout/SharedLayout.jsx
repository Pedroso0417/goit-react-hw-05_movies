// SharedLayout.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = ({ children }) => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <h1>Movie App</h1>
        <nav className={css.navigation}>
          <ul className={css.ul}>
            <li className={css.home}>
              <Link to="/">Home</Link>
            </li>
            <li className={css.movies}>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={css.main}>{children}</main>
      <footer className={css.footer}>
        <p>&copy; 2024 Movie App</p>
      </footer>
    </div>
  );
};

export default SharedLayout;
