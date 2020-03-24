import React from 'react';
import Home from './component/Home';
import NoticeFilm from './container/noticeMovie';
import {
  Switch,
  Route
} from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/film/:id" component={NoticeFilm} />
      </Switch>
    </div>
  );
}

export default App;
