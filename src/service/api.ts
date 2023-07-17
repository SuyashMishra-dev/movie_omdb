import axios from 'axios';
import { API_KEY, GET_MOVIE_URL } from '../config/config';

export const fetchMovies = async (searchTerm: string, type: string) => {
  try {
    const response = await axios.get(GET_MOVIE_URL, {
      params: {
        apikey: API_KEY,
        s: searchTerm,
        ...(type !== 'All' ? { type } : {}),
      },
    });
    return response.data.Search;
  } catch (error) {
    throw new Error('Error fetching movies.');
  }
};

export const fetchSingleMovie = async (id: any) => {
  try {
    const response = await axios.get(GET_MOVIE_URL, {
      params: {
        apikey: API_KEY,
        i: id,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching movies.');
  }
};
