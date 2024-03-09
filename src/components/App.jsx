import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('Pages/HomePage/HomePage'));
const Movies = lazy(() => import('Pages/MovieDetailsPage/MovieDetailsPage'));
const MovieDetails = lazy(() => import('Pages/MoviesPage/MoviesPage'));
const Cast = lazy(() => import('./CastList/CastList'));
const Reviews = lazy(() => import('./ReviewList/ReviewList'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
