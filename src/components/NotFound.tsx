import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

export const BackToHomeButton = styled(Link)`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const NotFound: React.FC = () => {
  return (
    <NotFoundContainer>
      <h2>404 - Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <BackToHomeButton to="/">Back to Home</BackToHomeButton>
    </NotFoundContainer>
  );
};

export default NotFound;
