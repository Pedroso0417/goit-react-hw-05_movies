import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../../themoviedb-api';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await fetchTrendingMovies();
        console.log(movies)
        setTrendingMovies(movies);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <ul>
        {trendingMovies.map((mov) => 
          <li key={mov.id}>
            <Link to={`/movies/${mov.id}`} style={{color:"black"}}>{mov.title}</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default HomePage;
