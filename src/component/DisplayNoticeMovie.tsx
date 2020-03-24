import React from 'react';

const imageUrlPrefix = "https://image.tmdb.org/t/p/w500/"

interface Props {
  notice: Notice;
}
interface Notice {
  title: string;
  posterPath: string;
  overview: string;
}

const DisplayMovies: React.FC<Props> = ({ notice }: Props) => {
  return (
    <div className="displayMovies">
      <p >{notice.title}</p>
      <img src={imageUrlPrefix + notice.posterPath} />
      <p>{notice.overview}</p>
    </div>
  );
}

export default DisplayMovies;