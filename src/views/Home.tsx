import React, { useContext } from 'react';
import { styled } from 'styled-components';
import MovieCard from '../components/MovieCard';
import SearchForm from '../components/SearchForm';
import { MovieContext } from '../context/movieContext';

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3rem;
  justify-content: center;
`;

const Image = styled.img`
  width: 40%;
  margin: auto;
  margin-top: 5rem;
`;

const AlignCenter = styled.div`
  text-align: center;
`;

const Home: React.FC = () => {
  const { state } = useContext(MovieContext);

  return (
    <>
      <SearchForm />
      {state.movies.length === 0 && (
        <AlignCenter>
          <Image
            alt="img"
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          />
          <p>Content Not Found...</p>
        </AlignCenter>
      )}
      <CardContainer>
        {state.movies.map((movie) => (
          <MovieCard key={movie} movie={movie} />
        ))}
      </CardContainer>
    </>
  );
};

export default Home;
