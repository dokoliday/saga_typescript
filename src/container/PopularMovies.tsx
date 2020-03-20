import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMovies from '../component/DisplayMovies';
const apiKey = process.env.REACT_APP_API_KEY;


const PopularMovies: React.FC = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const result = await axios(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
      );
      setPopularMovies(result.data.results);
    };
    fetchData();
  }, [page]);
  return (
    <div className="popularMovies">
      <p>page : {page} </p>
      <button onClick={(): React.MouseEvent<HTMLButtonElement, MouseEvent> | void | null => page < 500 ? setPage(page + 1) : null}>+</button>
      <button onClick={(): React.MouseEvent<HTMLButtonElement, MouseEvent> | void | null => page > 1 ? setPage(page - 1) : null}>-</button>
      <DisplayMovies popularMovies={popularMovies} />
    </div>
  );
}

export default PopularMovies;
