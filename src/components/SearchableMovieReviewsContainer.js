import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = { reviews: [], searchTerm: ""}
    }

    updateState = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    fetchFlicks = (e) => {
        e.preventDefault()
        fetch(URL + '&query=' + this.state.searchTerm)
        .then(res => res.json())
        .then(flickData => this.setState({reviews: flickData.results}))
    }
    
    render() {
        return <div className='searchable-movie-reviews'>
            <h1>Searchable Movie Reviews</h1>
            <form onSubmit={this.fetchFlicks} name='reviews'>
                <input type='text' name="searchTerm" value={this.state.searchTerm} onChange={this.updateState} />
                <button type='submit'>Search</button>
            </form>
            < MovieReviews reviews={this.state.reviews} />
        </div>
    }
}
