import { fireEvent, render } from '@testing-library/react';
import MovieCard from '../components/MovieCard';

const mockMovie = {
  imdbID: '123',
  Title: 'Test Movie',
  Year: '2021',
  Poster: 'test.jpg',
  isFavourite: false,
};

test('Renders movie card correctly', () => {
  const { getByText, getByRole } = render(<MovieCard movie={mockMovie} />);

  expect(getByText(mockMovie.Title)).toBeInTheDocument();
  expect(getByText('Release Date: 2021')).toBeInTheDocument();
  expect(getByRole('img')).toHaveAttribute('src', mockMovie.Poster);
  expect(getByRole('button')).toBeInTheDocument();
  expect(getByRole('button')).toHaveTextContent('Favourite');
});

test('fires handleToggleFavourite when favourite button is clicked', () => {
  const { getByRole } = render(<MovieCard movie={mockMovie} />);

  fireEvent.click(getByRole('button'));
  // Add assertions here to check if handleToggleFavourite is called correctly
});
