import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
const imageUrlPrefix = 'https://image.tmdb.org/t/p/w500/'

interface Props {
  notice: Notice;
};
interface Notice {
  title: string;
  posterPath: string;
  overview: string;
  video: string | null;
};

const DisplayMovies: React.FC<Props> = ({ notice }: Props) => {

  const renderVideo = (video: string | null): JSX.Element =>
    video
      ?
      <iframe
        width='560'
        height='315'
        src={`https://www.youtube.com/embed/${video}`}
        frameBorder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        className='video'
      />
      :
      <p>No video avaible for this movie</p>
    ;
    return <Container className='displayMovies'>
      <Row>
        <Col xs={1} md={6} >
          <p className='title'>{notice.title}</p>
          <img src={imageUrlPrefix + notice.posterPath} alt='poster' className='poster' />
        </Col>
        <Col xs={1} md={6} >
          <p className='resume'>{notice.overview}</p>
          {renderVideo(notice.video)}
        </Col>
      </Row>
    </Container>
}


export default DisplayMovies;