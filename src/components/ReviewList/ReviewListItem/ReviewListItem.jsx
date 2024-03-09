// ReviewListItem.jsx

import React from 'react';
import PropTypes from 'prop-types';
import css from './ReviewListItem.module.css';

const ReviewListItem = ({ review }) => {
  const { author, content } = review;

  return (
    <li className={css.reviewListItem}>
      <p className={css.author}>Author: {author}</p>
      <p className={css.content}>{content}</p>
    </li>
  );
};

ReviewListItem.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewListItem;
