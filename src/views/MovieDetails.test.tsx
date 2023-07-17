import '@testing-library/jest-dom/extend-expect'; // For additional matchers like "toBeInTheDocument"
import { render, screen, waitFor } from '@testing-library/react';
import { fetchSingleMovie } from '../service/api';
import MovieDetails from './MovieDetails';

// Mock the api module
jest.mock('../service/api');

describe('MovieDetails component', () => {
  test('renders movie details', async () => {
    // Mock the response of fetchSingleMovie function
    (fetchSingleMovie as jest.Mock).mockResolvedValueOnce({
      imdbID: 'tt1234567',
      Title: 'Mock Movie',
      Year: '2023',
      Poster: 'mock-poster.jpg',
      Plot: 'Mock plot description',
      Genre: 'Mock, Comedy',
      Runtime: '120 min',
      imdbRating: '7.5',
    });

    render(<MovieDetails />);

    // Wait for the movie details to be rendered
    await waitFor(() => {
      expect(screen.getByText('Mock Movie')).toBeInTheDocument();
      expect(screen.getByText('Year: 2023')).toBeInTheDocument();
      expect(screen.getByText('Genre: Mock, Comedy')).toBeInTheDocument();
      expect(screen.getByText('Runtime: 120 min')).toBeInTheDocument();
      expect(screen.getByText('IMDB Rating: 7.5')).toBeInTheDocument();
      expect(screen.getByText('Mock plot description')).toBeInTheDocument();
    });

    // Check the movie poster image
    const moviePoster = screen.getByAltText('Mock Movie') as HTMLImageElement;
    expect(moviePoster.src).toBe('http://localhost/mock-poster.jpg');
  });

  test('displays "Loading..." when movie details are being fetched', async () => {
    // Mock the fetchSingleMovie function to take longer to resolve
    (fetchSingleMovie as jest.Mock).mockImplementation(
      () => new Promise<void>((resolve) => setTimeout(() => resolve(), 2000))
    );

    render(<MovieDetails />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for the movie details to be resolved
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });
  });
});
