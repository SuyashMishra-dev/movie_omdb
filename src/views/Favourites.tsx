import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import MovieCard from '../components/MovieCard';
import { MovieContext } from '../context/movieContext';
import { CardContainer } from './Home';

interface FavouritesProps {}

const FavouriteContainer = styled.div`
  width: 100%;
`;

const Favourites: React.FC<FavouritesProps> = () => {
  const { state, dispatch } = useContext(MovieContext);

  useEffect(() => {
    // @ts-ignore
    dispatch({ type: 'SET_FAV_MOVIES' });
  }, []);

  return (
    <FavouriteContainer>
      <h2>Favourite Movies</h2>
      <CardContainer>
        {state.favourites.map(
          (movie: {
            Title: any;
            imdbID?: string;
            Year?: string;
            Poster?: string;
            isFavourite?: boolean;
          }) => (
            // @ts-ignore
            <MovieCard key={movie.Title} movie={movie} />
          )
        )}
      </CardContainer>
    </FavouriteContainer>
  );
};

export default Favourites;
