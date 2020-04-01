import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './DisplayMovies.css';


interface Movies {
  title: string;
  poster_path: string;
  id: number;
}
interface Props {
  movie: Movies[];
}
const DisplayMovies: React.FC<Props> = ({ movie }: Props) => {
  const imageUrlPrefix = 'https://image.tmdb.org/t/p/w500/';
  const history = useHistory();

  return (
    <Container className='displayMovies'>
      <Row>
        {movie.map((movie, key) =>
          <Col md={4} key={key}>
            <Card style={{ width: '18rem' }} className='card'>
              <Card.Img variant="top" src={imageUrlPrefix + movie.poster_path} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Button variant="primary" onClick={(): React.MouseEvent<HTMLButtonElement, MouseEvent> | void | null => {
                  history.push('/film/' + movie.id)
                }}>Fiche</Button>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default DisplayMovies;
