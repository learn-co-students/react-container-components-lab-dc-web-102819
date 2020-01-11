import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import { Form, Button, Divider } from 'semantic-ui-react'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;
class SearchableMovieReviewsContainer extends Component {
  constructor(){
    super()
    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  onChange = e => {
    this.setState({searchTerm: e.target.value})
  }
  handleSubmit = () => {
    // console.log(URL+this.state.searchTerm)
    if(this.state.searchTerm === ''){
      this.setState({reviews:[]})
    }else{
      fetch(URL+this.state.searchTerm)
      .then(res=>res.json())
      .then(review=> this.setState({reviews: review.results}))
      .catch(err=>console.warn(err.message))
    }
  }
  render(){
    return (
      <div className=''>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label='Search Movie Review'
            placeholder='Search...'
            onChange={this.onChange}
          />
          <Button>Search</Button>
        </Form>
        <Divider />
        {this.state.reviews.map(reviews => <MovieReviews key={reviews.display_title} reviews={reviews} />)}
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
