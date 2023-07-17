import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  max-width: 200px;
  text-align: center;

  img {
    max-width: 100%;
    cursor: pointer;
  }

  h2 {
    margin: 8px 0;
  }

  p {
    margin: 4px 0;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    padding: 8px;
    margin-top: 8px;
    width: 100%;
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: #0056b3;
    }
  }
  & .mark-fav {
    background-color: red;
    &:hover {
      background-color: #8b0000;
    }
  }
`;
