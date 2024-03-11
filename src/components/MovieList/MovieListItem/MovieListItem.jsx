import PropTypes from 'prop-types';
import css from './MovieListItem.module.css';

const MovieListItem = ({ movie }) => {
  const { title, release_date, overview } = movie;
  return (
    <div className={css.MovieListItem}>
      <h1>{title}</h1>
      <p> Release Date: {release_date} </p>
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
