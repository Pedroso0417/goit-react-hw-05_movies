import PropTypes from 'prop-types';
import css from './MovieListItem.module.css';

const MovieListItem = ({ movie }) => {
  const { title, releaseDate, overview } = movie;
  return (
    <div className={css.MovieListItem}>
      <h3>{title}</h3>
      <p> Release Date:{releaseDate} </p>
      <p>{overview}</p>
    </div>
  );
};

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieListItem;
