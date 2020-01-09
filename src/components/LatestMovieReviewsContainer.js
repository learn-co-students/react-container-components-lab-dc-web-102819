import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {reviews: []}
    }

    componentDidMount() {
        this.fetchFlicks()
    }

    // componentDidUpdate() {
    //     this.fetchFlicks()
    // }
    
    fetchFlicks() {
        fetch(URL)
        .then(res => res.json())
        .then(flickData => this.setState({reviews: flickData.results}))
    }
    
    render() {
        return <div className='latest-movie-reviews'>
            <h1>Lastest Reviews</h1>
                < MovieReviews reviews={this.state.reviews} />
            </div>
    }
}
