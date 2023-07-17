// src/__mocks__/api.ts
export const fetchSingleMovie = async (movieId: string) => {
  return {
    imdbID: 'tt1234567',
    Title: 'Mock Movie',
    Year: '2023',
    Poster: 'mock-poster.jpg',
    Plot: 'Mock plot description',
    Genre: 'Mock, Comedy',
    Runtime: '120 min',
    imdbRating: '7.5',
  };
};
