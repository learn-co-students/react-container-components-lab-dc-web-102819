import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import { Card, Header, Container } from 'semantic-ui-react'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
	constructor(){
		super()
		this.state = {
			reviews: []
		}
	}

	componentDidMount() {
		fetch(URL)
			.then(response => response.json())
			.then(json => this.setState({ reviews: json.results}))
	}

	render() {
		console.log(this.state.reviews)
		return (
			<Container>
				<Header as='h2'></Header>
			    <Header as='h1'>Recent Reviews</Header>
				<Card.Group
					itemsPerRow={4}
					className="latest-movie-reviews">
						{this.state.reviews.map(review => <MovieReviews movie={review} />)}
				</Card.Group>
			</Container>
		)
	}
}

export default LatestMovieReviewsContainer

//<Card.Group centered items={items} />
//<Card.Group itemsPerRow={4}>