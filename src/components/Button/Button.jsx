import PropTypes from 'prop-types';

const Button = ({ onClick, children, type, disabled }) => {
  return (
    <button type={type} onClick={onClick}disabled={disabled}>
      {children}
    </button>
  );
};

Button.propTypes ={
    onClick:PropTypes.func.isRequired,
    children:PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    disabled:PropTypes.bool.isRequired,
}

export default Button;

