import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchSingleMovie } from '../service/api';

interface Movie {
  imdbID?: string;
  Title?: string;
  Year?: string;
  Poster?: string;
  Plot?: string;
  Genre?: string;
  Runtime?: string;
  imdbRating?: string;
}

const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const MoviePoster = styled.img`
  max-width: 300px;
  margin-bottom: 20px;
`;

const MovieDetails: React.FC = () => {
  const [movieDetails, setMovieDetails] = useState<Movie>({});
  const { movieId } = useParams<{ movieId: string }>();

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetchSingleMovie(movieId);
      setMovieDetails(res);
    };
    fetchDetails();
  }, []);

  return (
    <>
      {movieDetails.Title ? (
        <MovieDetailsContainer>
          <h2>{movieDetails.Title}</h2>
          <MoviePoster src={movieDetails.Poster} alt={movieDetails.Title} />
          <p>Year: {movieDetails.Year}</p>
          <p>Genre: {movieDetails.Genre}</p>
          <p>Runtime: {movieDetails.Runtime}</p>
          <p>IMDB Rating: {movieDetails.imdbRating}</p>
          <p>{movieDetails.Plot}</p>
        </MovieDetailsContainer>
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

export default MovieDetails;
