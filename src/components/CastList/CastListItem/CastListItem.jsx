import PropTypes from 'prop-types';
import css from './CastListItem.module.css';

const CastListItem = ({ castMember }) => {
  return (
    <li key={castMember.id} className={css.CastListItem}>
      {castMember.profile_path !==null?<img
        src={`https://image.tmdb.org/t/p/w185${castMember.profile_path}`}
        alt={castMember.name}
        className={css.CastImage}
      />:<h4 style={{padding:"10px",border:"1px solid black",borderRadius:"50%",marginRight:"5px"}}>No image</h4>
      }
      <div className={css.CastInfo}>
        <p className={css.CastName}>{castMember.name}</p>
        <p className={css.CastCharacter}>Character: {castMember.character}</p>
      </div>
    </li>
  );
};

CastListItem.propTypes = {
  castMember: PropTypes.shape({
    id: PropTypes.number.isRequired,
    profile_path: PropTypes.string,
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
  }).isRequired,
};

export default CastListItem;
