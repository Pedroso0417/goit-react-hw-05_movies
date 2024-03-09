import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from './MoviesPage';
import  Cast  from 'react';
import  Reviews  from 'react';

const MoviePage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use Promise.all to wait for all fetch requests to complete
        const [detailsResponse, castResponse, reviewsResponse] =
          await Promise.all([
            fetch(`/movies/get-movie-details/${movieId}`).then(response =>
              response.json()
            ),
            fetch(`/movies/get-movie-credits/${movieId}`).then(response =>
              response.json()
            ),
            fetch(`/movies/get-movie-reviews/${movieId}`).then(response =>
              response.json()
            ),
          ]);

        setMovieDetails(detailsResponse);
        setCast(castResponse.cast);
        setReviews(reviewsResponse.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <div>
      <h2>Movie Details</h2>
      <MovieDetails movie={movieDetails} />
      <h2>Cast</h2>
      <Cast cast={cast} />
      <h2>Reviews</h2>
      <Reviews reviews={reviews} />
    </div>
  );
};

export default MoviePage;
