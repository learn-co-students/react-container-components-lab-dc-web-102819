import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import {Container, Header, Divider} from 'semantic-ui-react'


import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';

ReactDOM.render(
  <Container className='app'>
    <Header size='huge'>Movie Reviews</Header>
    <br/>
    <SearchableMovieReviewsContainer />
    <Divider></Divider>
    <LatestMovieReviewsContainer />
  </Container>,
  document.getElementById('root')
);