import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Menu, Divider } from 'semantic-ui-react'

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <Container>
    <Menu stackable>
      <Menu.Item>
        <img src='https://developer.nytimes.com/logos/logo?v=1575573724381' />
      </Menu.Item>
      <Menu.Item
        name='features'>
        NY Times
      </Menu.Item>
    </Menu>
    <SearchableMovieReviewsContainer />
    <Divider />
    <LatestMovieReviewsContainer />
  </Container>,
  document.getElementById('root')
);
