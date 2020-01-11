import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import { Grid } from 'semantic-ui-react'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  constructor(){
    super()
    this.state = {
      reviews: []
    }
  }

  componentDidMount(){
    fetch(URL)
    .then(res=>res.json())
    .then(movieReviews => this.setState({reviews: movieReviews.results}))
    .catch(err => console.warn(err.message))
  }

  render(){
    return (
      <div className='latest-movie-reviews'>
        {this.state.reviews.map(reviews => <MovieReviews key={reviews.display_title} reviews={reviews}/>)}
      </div>
    )
  }
}
export default LatestMovieReviewsContainer
