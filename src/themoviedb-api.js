import axios from 'axios';

const API_KEY = 'a930ab26c84d78c11b4064b5c7257e43'; // Replace with your actual API key

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: API_KEY,
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`trending/movie/day`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

export const fetchMovieByQuery = async movieName => {
  try {
    const response = await axios.get(`search/movie?query=${movieName}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movie by query:', error);
    throw error;
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    const response = await axios.get(`movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

export const fetchMovieCast = async movieId => {
  try {
    const response = await axios.get(`movie/${movieId}/credits?`);
    return response.data.cast;
  } catch (error) {
    console.error('Error fetching movie cast:', error);
    throw error;
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    const response = await axios.get(`movie/${movieId}/reviews?`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    throw error;
  }
};
