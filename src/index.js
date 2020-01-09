import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';
import { Container } from 'semantic-ui-react'

ReactDOM.render(
  <Container className="app">
    <SearchableMovieReviewsContainer />
    <LatestMovieReviewsContainer />
  </Container>,
  document.getElementById('root')
);