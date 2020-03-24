import React from 'react';
import { useHistory } from 'react-router-dom';

interface Movies {
  title: string;
  poster_path: string;
  id: number;
}
interface Props {
  popularMovies: Movies[];
}
const DisplayMovies: React.FC<Props> = ({ popularMovies }: Props) => {
  const imageUrlPrefix = 'https://image.tmdb.org/t/p/w500/';
  const history = useHistory();


  return (
    <div className='displayMovies'>
      {popularMovies.map((movie, key) =>
        <>
          <button
            onClick={(): React.MouseEvent<HTMLButtonElement, MouseEvent> | void | null => {
              history.push('/film/' + movie.id)
            }}>
            <p key={key}>{movie.title}</p>
            <img src={imageUrlPrefix + movie.poster_path} />
          </button>
        </>

      )}
    </div>
  );
}

export default DisplayMovies;
