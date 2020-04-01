import React from 'react';
import Home from './container/Home';
import NoticeFilm from './container/FetchNoticeMovie';
import {
  Link,
  Switch,
  Route
} from "react-router-dom";
import { Navbar, Container } from 'react-bootstrap';
import PopularMovies from './container/fetchMovies.tsx';
// import TopRatedMovies from './container/TopRatedMovies';
// import UpComing from './container/UpcomingMovies';
import './App.css';


const App: React.FC = () => {
  return (
    <Container fluid className="Container">
      <Navbar expand="lg">
        <Navbar.Brand >
          <Link to="/">
            <p className="titleNav">CP</p>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Link to="/top_rated_movies=0/page/1">
            <p className="pNav">Top Rated Movies</p>
          </Link>
          <Link to="/popular_movies=1/page/1">
            <p className="pNav">Popular Movies</p>
          </Link>
          <Link to="/upcoming_movies=2/page/1">
            <p className="pNav">UpComing Movies</p>
          </Link>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:genre=:type/page/:pageNumber" component={PopularMovies} />
        <Route path="/:genre=:type/page/:pageNumber" component={PopularMovies} />
        <Route path="/:genre=:type/page/:pageNumber" component={PopularMovies} />
        <Route path="/film/:id" component={NoticeFilm} />
      </Switch>
    </Container >
  );
}

export default App;
