import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  & > a {
    text-decoration: none;
    color: #333;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavBarContainer>
      <Link to="/">Home</Link>
      <Link to="/favourites">Favourites</Link>
    </NavBarContainer>
  );
};

export default Navbar;
