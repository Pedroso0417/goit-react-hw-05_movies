import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchMovieCast } from '../../themoviedb-api'; // Adjust the import path based on your project structure
import css from './CastList.module.css';

const CastList = ({ movieId }) => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const castData = await fetchMovieCast(movieId);
        setCast(castData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cast data:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchCastData();
  }, [movieId]);

  if (loading) {
    return <div>Loading cast data...</div>;
  }

  if (error) {
    return <div>Error fetching cast data: {error.message}</div>;
  }

  return (
    <div className={css.container}>
      <h2>Cast</h2>
      <ul>
        {cast.map(castMember => (
          <li key={castMember.id}>
            <img
              src={`https://image.tmdb.org/t/p/w185${castMember.profile_path}`}
              alt={castMember.name}
            />
            <p className={css.member}>{castMember.name}</p>
            <p>Character: {castMember.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

CastList.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default CastList;
