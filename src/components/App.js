import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import ContentRowMovies from './ContentRowMovies';
import ErrorPagina from './errorPagina';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    /*<React.Fragment>
      	
    </React.Fragment>*/
    <Router>

      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <div id="wrapper">
        <SideBar />
        <Switch>
            <Route exact path="/">
                <ContentWrapper />
              </Route>
              <Route exact path="/home">
                <ContentWrapper />
              </Route>
              <div className='row'>
                <div className="col-lg-12 mb-4">
                  <Route exact path="/generoEnDb">
                    <GenresInDb/>
                  </Route>
                  <Route exact path="/ultimaPelicula">
                    <LastMovieInDb />
                  </Route>
                  <Route exact path="/contenidoPelicula">
                    <div className='pl-2'>
                      <ContentRowMovies />
                    </div>
                  </Route>
                  <Route exact path="/error404">
                    <ErrorPagina />
                  </Route>
                </div>
              </div>
        </Switch>
      </div>
  </Router>
  );
}

export default App;
