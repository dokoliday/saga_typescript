import React from 'react';
import PopularMovies from '../container/PopularMovies';

const Home: React.FC = () => {
  return (
    <div className="home">
      MOVIES
      <PopularMovies />
    </div>
  );
}

export default Home;
