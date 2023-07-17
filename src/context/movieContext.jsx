import { createContext, useReducer } from 'react';

const initialState = {
  movies: [],
  favourites: JSON.parse(localStorage.getItem('favourites') || '[]'),
};

const MovieContext = createContext({
  state: initialState,
  dispatch: () => {},
});

const movieReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      const favouritesMov = JSON.parse(
        localStorage.getItem('favourites') || '[]'
      );
      const updatedMovie = action.payload.map((ele) => {
        return {
          ...ele,
          isFavourite: favouritesMov.some(
            (favMovie) => favMovie.imdbID === ele.imdbID
          ),
        };
      });
      return { ...state, movies: updatedMovie };
    case 'TOGGLE_FAVOURITE':
      const updatedFavourites = state.favourites.some(
        (ele) => ele.imdbID === action.payload.imdbID
      )
        ? state.favourites.filter((fav) => fav.imdbID !== action.payload.imdbID)
        : [...state.favourites, action.payload];
      localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
      const updatedMovies = state.movies.map((ele) => {
        return {
          ...ele,
          isFavourite: updatedFavourites.some(
            (favMovie) => favMovie.imdbID === ele.imdbID
          ),
        };
      });
      return { ...state, favourites: updatedFavourites, movies: updatedMovies };
    case 'SET_FAV_MOVIES':
      const favourites = JSON.parse(
        localStorage.getItem('favourites') || '[]'
      ).map((ele) => ({ ...ele, isFavourite: true }));
      console.log('favourites', favourites);
      return {
        ...state,
        favourites,
      };
    default:
      return state;
  }
};

const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };
