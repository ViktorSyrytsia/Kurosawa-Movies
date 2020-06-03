import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app/app';
import ErrorBoundry from './components/error-boundry/error-boundry';
import MovieService from './services/movie-service';
import { MovieServiceProvider, MovieServiceConsumer } from './components/movie-service-context/movie-service-context';

import store from './store';

const movieService = new MovieService();




ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <MovieServiceProvider value={movieService}>
        <Router>
          <App />
        </Router>
      </MovieServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
