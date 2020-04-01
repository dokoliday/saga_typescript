import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMovies from '../../component/DisplayMovies';
import { Pagination } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const apiKey = process.env.REACT_APP_API_KEY;

interface Props {
  match: {
    params: {
      pageNumber: string;
      type: string;
      genre: string;
    };
  };
};
 
const apiUrls = [
  `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=`,
  `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=`,
  `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=`
]
const PopularMovies: React.FC<Props> = ({ match }: Props) => {

  const apiUrl = apiUrls[match.params.type];
  const history = useHistory();
  
  const [currentPage, setCurrentPage] = useState("1");
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    history.push(`/${match.params.genre}=${match.params.type}/page/${currentPage}`)
    const fetchData = async (): Promise<void> => {
      const result = await axios(
        `${apiUrl}${currentPage}`
      );
      setPopularMovies(result.data.results);
    };
    fetchData();
  }, [currentPage]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const result = await axios(
        `${apiUrl}${match.params.pageNumber}`
      );
      setPopularMovies(result.data.results);
    };
    fetchData();
  }, [match.params.pageNumber]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const result = await axios(
        `${apiUrl}${match.params.pageNumber}`
      );
      setPopularMovies(result.data.results);
      setCurrentPage("1")
    };
    fetchData();
  }, [match.params.type]);

  const nextPage = (): void => {
    setCurrentPage(JSON.stringify(parseInt(currentPage) + 1))
    return
  };
  const lastPage = (): void => {
    setCurrentPage(JSON.stringify(parseInt(currentPage) - 1))
    return
  };

  return (
    <div className="popularMovies">
      <Pagination>
        <Pagination.First onClick={(): React.MouseEvent<HTMLButtonElement, MouseEvent> | void | null => setCurrentPage("1")} />
        <Pagination.Prev onClick={(): React.MouseEvent<HTMLButtonElement, MouseEvent> | void | null => parseInt(currentPage) > 1 ? lastPage() : null} />
        <Pagination.Item>{match.params.pageNumber}</Pagination.Item>
        <Pagination.Next onClick={(): React.MouseEvent<HTMLButtonElement, MouseEvent> | void | null => parseInt(currentPage) < 500 ? nextPage() : null} />
        <Pagination.Last onClick={(): React.MouseEvent<HTMLButtonElement, MouseEvent> | void | null => setCurrentPage("10")} />
      </Pagination>
      <DisplayMovies movie={popularMovies} />
    </div>
  );
}
export default PopularMovies;
