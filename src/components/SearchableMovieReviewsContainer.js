import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import {Form, Button, Container, Header} from 'semantic-ui-react'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here


class SearchableMovieReviewsContainer extends Component{

    constructor(){
        super()
        this.state = {
            searchTerm: '',
            reviews: []
        }
    }

    handleChange = (event) => {
        this.setState(
            {searchTerm: event.target.value}
        )
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        fetch(URL.concat(this.state.searchTerm))
        .then(response => response.json())
        .then(reviewsQuery => this.setState(
                {reviews: reviewsQuery.results}
            )
        )
    }

    render(){
        return(
            <Container>
                <Form onSubmit = {this.handleSubmit}>
                    <Form.Input 
                        onChange = {this.handleChange}
                        placeholder='Search...' 
                    />
                    <Button inverted color = 'green'>Submit</Button>
                </Form>
                <br/>
                <MovieReviews reviews={this.state.reviews}/>
            </Container>
        )
    }
}

export default SearchableMovieReviewsContainer