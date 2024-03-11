import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast, fetchMovieDetails, fetchMovieReviews } from 'themoviedb-api';
import CastListItem from 'components/CastList/CastListItem/CastListItem';
import MovieListItem from 'components/MovieList/MovieListItem/MovieListItem';
import ReviewListItem from 'components/ReviewList/ReviewListItem/ReviewListItem';
const MoviePage = () => {
  const id  = useParams().movieId
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use Promise.all to wait for all fetch requests to complete
        const [detailsResponse, castResponse, reviewsResponse] =
          await Promise.all([
            fetchMovieDetails(id),
            fetchMovieCast(id),
            fetchMovieReviews(id),
          ]);
          setMovieDetails(detailsResponse);
          setCast(castResponse);
          setReviews(reviewsResponse);      
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div style={{paddingInline:"20px"}}>
      <h2>Movie Details</h2>
      {movieDetails !==null&& <MovieListItem movie={movieDetails} />}
      <h2>Cast</h2>
     {cast.length>0&& cast.map((e)=><CastListItem castMember={e} key={e.id}/> )}
      <h2>Reviews</h2>
      {reviews.length>0 && reviews.map((e,i)=><ReviewListItem key={i} review={e} />)}
    </div>
  );
};

export default MoviePage;
