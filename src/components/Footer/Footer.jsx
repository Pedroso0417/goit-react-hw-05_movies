import PropTypes from 'prop-types';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <p>&copy; 2024 Your Movie App. All rights reserved.</p>
    </footer>
  );
};

Footer.propTypes = {
  Footer: PropTypes.string.isRequired,
};

export default Footer;
