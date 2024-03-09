import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CastList from './MovieDetailsPage'; // Adjust the import path based on your project structure
import { fetchMovieDetails } from '../../themoviedb-api'; // Adjust the import path based on your project structure
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({ cast: [] }); // Set initial state with 'cast' property
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const movieData = await fetchMovieDetails(movieId);
        setMovieDetails(movieData); // Update state
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie data:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [movieId]);

  if (loading) {
    return <div>Loading movie data...</div>;
  }

  if (error) {
    return <div>Error fetching movie data: {error.message}</div>;
  }

  return (
    <div className={css.container}>
      {/* Display other movie details here */}
      <h1>Movie Details Page</h1>
      <CastList cast={movieDetails.cast} />
    </div>
  );
};

export default MovieDetailsPage;
