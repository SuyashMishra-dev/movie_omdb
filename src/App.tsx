import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import { MovieProvider } from './context/movieContext';
import Favourites from './views/Favourites';
import Home from './views/Home';
import MovieDetails from './views/MovieDetails';

const App: React.FC = () => {
  return (
    <Router>
      <MovieProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </MovieProvider>
    </Router>
  );
};

export default App;
