import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import { Image, Item, Grid } from 'semantic-ui-react'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {

	constructor(){
		super()
		this.state = {
			reviews: []
		}
	}

	componentDidMount(){
		fetch(URL)
		.then(resp => resp.json())
		.then(data => {
			this.setState({
				reviews: data.results
			})
		})
	}

	render() {
		return (

			<Grid centered columns={2}>
				<Grid.Column>
					<Item.Group divided>
						{this.state.reviews.map(review => <MovieReviews key={review.link.url} review={review}/>)}
					
					</Item.Group>
				</Grid.Column>
			</Grid>


					)
			
	}
}