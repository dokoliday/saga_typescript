import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayNoticeMovie from '../../component/DisplayNoticeMovie';

const apiKey = process.env.REACT_APP_API_KEY;

interface Props {
  match: {
    params: {
      id: number;
    };
  };
};
interface Notice {
  title: string;
  posterPath: string;
  overview: string;
  video: string;
};

const NoticeMovie: React.FC<Props> = ({ match }: Props) => {
  const [noticeMovie, setNoticeMovie] = useState<Notice>({ title: "", posterPath: "", overview: "", video: "" });
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const result = await axios(
        `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${apiKey}&language=en-US`
      );
      const resultVideo = await axios(
        `https://api.themoviedb.org/3/movie/${match.params.id}/videos?api_key=${apiKey}&language=en-US`
      )
      console.log(resultVideo.data.results)


      setNoticeMovie({
        title: result.data.title,
        posterPath: result.data.poster_path,
        overview: result.data.overview,
        video: resultVideo.data.results[1].key
      });
    };
    fetchData();
  }, []);
  return (
    <div className="noticeMovie">
      <DisplayNoticeMovie notice={noticeMovie} />
    </div>
  );
}

export default NoticeMovie;
