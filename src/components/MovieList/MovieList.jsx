import PropTypes from 'prop-types';
import css from './MovieList.module.css';
import MovieListItem from './MovieListItem/MovieListItem';

const MovieList = ({ movies }) => {
  return (
    <div className={css.movieList}>
      <h2>Movies</h2>
      <ul>
        {movies.map(movie => (
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieList;
