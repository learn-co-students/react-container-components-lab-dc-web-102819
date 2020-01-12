import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import { Container } from 'semantic-ui-react'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component{
    
    constructor(){
        super()
        this.state = {
            reviews: []
        }
    }

    fetchReviews = () => {
        fetch(URL)
        .then(response => response.json())
        .then(data => {
            this.setState(
                    {reviews: data.results}
                )
            }
        )
    }
    
    componentDidMount(){
        this.fetchReviews()
    }

    render(){
        return (
            <Container className='latest-movie-reviews'>
                <MovieReviews reviews = {this.state.reviews}/> 
            </Container>
        )
    }
}

export default LatestMovieReviewsContainer