import React, { useEffect, useState } from 'react';
import './Home.css'
import Caroussel from '../../component/Carousel';
import axios from 'axios'
const apiKey = process.env.REACT_APP_API_KEY;

const Home: React.FC = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const result = await axios(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
      );
      setMovies(result.data.results);
    };
    fetchData();
  }, []);
  return (
    <div className="home">
      <h1 className="appTitle">Cinema Paradiso</h1>
      <Caroussel carouselMovies={movies} />
    </div>
  );
}

export default Home;