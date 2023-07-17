import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MovieContext } from '../context/movieContext';
import { Card } from './MovieCard.styles';

interface MovieCardProps {
  movie: {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
    isFavourite: boolean;
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { dispatch } = useContext(MovieContext);
  const history = useNavigate();

  const handleToggleFavourite = () => {
    // @ts-ignore
    dispatch({ type: 'TOGGLE_FAVOURITE', payload: movie });
  };

  return (
    <Card>
      <img
        src={movie.Poster}
        alt={movie.Title}
        // @ts-ignore
        onClick={() =>
          history(`/movies/${movie.imdbID}`, { state: { movie: movie } })
        }
      />
      <h2>{movie.Title}</h2>
      <p>Release Date: {movie.Year}</p>
      <button
        onClick={handleToggleFavourite}
        className={movie.isFavourite ? 'mark-fav' : ''}
      >
        {movie.isFavourite ? 'Unfavourite' : 'Favourite'}
      </button>
    </Card>
  );
};

export default MovieCard;
