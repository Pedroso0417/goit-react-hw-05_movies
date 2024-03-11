import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('Pages/HomePage/HomePage'));
const Movies = lazy(() => import('Pages/MovieDetailsPage/MovieDetailsPage'));
const MovieDetails = lazy(() => import('Pages/MoviesPage/MoviesPage'));


const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path="/" element={<SharedLayout />} />
        <Route index element={<Home />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

    </Suspense>
  );
};

export default App;
