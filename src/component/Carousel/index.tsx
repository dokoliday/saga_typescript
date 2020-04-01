import React from 'react';
import { Carousel, Col, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Carousel.css'

interface Props {
  carouselMovies: Movies[];
};
interface Movies {
  title: string;
  poster_path: string;
  release_date: string;
  id: number;
};
const DisplayCarousel: React.FC<Props> = ({ carouselMovies }: Props) => {
  const imageUrlPrefix = 'https://image.tmdb.org/t/p/w500/';
  const history = useHistory();

  return (
    <Carousel indicators={false} interval={4000} pause={false} className='carousel' >
      {carouselMovies.map((movie, key) =>
        <Carousel.Item key={key}>
          <Row>
            <Col xs={{ span: 3, offset: 3 }} md={{ span: 3, offset: 1 }} className='posterCol'>
              <img src={imageUrlPrefix + movie.poster_path} alt='poster' className='poster' />
            </Col>
            <Col xs={12} md={{ span: 3 }} className="descriptionCarousel">
              <h2 className='title'>{movie.title}</h2>
              <p className='date'>Year: {movie.release_date}</p>
              <Button variant="danger" onClick={(): React.MouseEvent<HTMLButtonElement, MouseEvent> | void | null => {
                history.push('/film/' + movie.id)
              }}>fiche</Button>
            </Col>
          </Row>
        </Carousel.Item>
      )}

    </Carousel >

  );
}
export default DisplayCarousel;
