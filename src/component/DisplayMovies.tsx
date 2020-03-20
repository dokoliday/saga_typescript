import React from 'react';

interface Movies {
  title: string;
  poster_path: string;
}

interface Props {
  popularMovies: Movies[];
}
const DisplayMovies: React.FC<Props> = ({ popularMovies }: Props) => {
  const imageUrlPrefix = "https://image.tmdb.org/t/p/w500/"
  return (
    <div className="displayMovies">
      {popularMovies.map((movie, key) =>
        <>
          <p key={key}>{movie.title}</p>
          <img src={imageUrlPrefix + movie.poster_path} />
        </>
      )}
    </div>
  );
}

export default DisplayMovies;
