import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchMovieReviews } from '../../themoviedb-api'; // Adjust the import path based on your project structure
import css from './ReviewList.module.css'; // Adjust the import path based on your project structure
import ReviewListItem from './ReviewListItem/ReviewListItem';

const ReviewList = ({ idMovie }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviewData = async () => {
      try {
        const reviewData = await fetchMovieReviews(idMovie);
        setReviews(reviewData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching review data:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchReviewData();
  }, [idMovie]);

  if (loading) {
    return <div>Loading review data...</div>;
  }

  if (error) {
    return <div>Error fetching review data: {error.message}</div>;
  }

  return (
    <div className={css.container}>
      <h2>Reviews</h2>
      <ul className={css.reviewlist}>
        {reviews.slice(0,4).map(({ id, review, author, content }) => (
          <ReviewListItem
            key={id}
            review={review}
            Author={author}
            content={content}
          />
        ))}
      </ul>
    </div>
  );
};

ReviewList.propTypes = {
  idMovie: PropTypes.string.isRequired,
};

export default ReviewList;
