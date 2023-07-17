import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { MovieContext } from '../context/movieContext';
import { fetchMovies } from '../service/api';

interface SearchFormProps {}

const Form = styled.div`
  width: 60%;
  margin: auto;
  margin-top: 6rem;
`;

const Input = styled.input`
  padding: 0.5rem 1rem;
  width: 60%;
  margin-left: 3rem;
`;

const Select = styled.select`
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  background-color: #333;
  color: #fff;
  transition: 0.3s ease-in-out;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #dbad52;
    color: #333;
  }
`;

const Option = styled.option`
  padding: 0.5rem;
`;

const SearchForm: React.FC<SearchFormProps> = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('All');
  const { dispatch } = useContext(MovieContext);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchType(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const moviesData = await fetchMovies(searchTerm, searchType);
      if (moviesData) {
        const moviesWithFavourites = moviesData.map((movie: any) => ({
          ...movie,
        }));
        if (searchTerm.trim() !== '') {
          // @ts-ignore
          dispatch({ type: 'SET_MOVIES', payload: moviesWithFavourites });
        } else {
          alert('Enter movie name before search');
          // @ts-ignore
          dispatch({ type: 'SET_MOVIES', payload: [] });
        }
      } else {
        // @ts-ignore
        dispatch({ type: 'SET_MOVIES', payload: [] });
      }
    } catch (error: any) {
      console.error(error?.message);
    }
  };

  return (
    <Form>
      <Input
        type="text"
        placeholder="Find your movie..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <Select value={searchType} onChange={handleSelectChange}>
        <Option value="All">All</Option>
        <Option value="movie">Movies</Option>
        <Option value="series">Series</Option>
        <Option value="episode">Episodes</Option>
      </Select>
      <Button onClick={handleSearch}>Search</Button>
    </Form>
  );
};

export default SearchForm;
