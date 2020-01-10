import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import { Image, Item, Grid, Form, Button} from 'semantic-ui-react'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
	
	constructor(){
		super()
		this.state = {
			formText:'',
			reviews: []
		}
	}

	handleSubmit = (event) => {
		event.preventDefault()
		fetch(URL + `&query=${this.state.formText}`)
		.then(resp => resp.json())
		.then(data => {
			this.setState({
				reviews: data.results
			})

		})
		event.target.reset()
		this.props.changeLatest(false)
	}

	changeText = (e) => {
		this.setState({
			formText: e.target.value 
		})
	}


	render() {
		return (
		<div>
			

			<Grid centered columns={2}>
				<Grid.Column>
					<Grid.Row >
					<Grid className='center aligned'>
					<Form  onSubmit={this.handleSubmit} size='large'>
						<Form.Group>
							<Form.Input 
							placeholder="Search reviews.." 
							onChange={this.changeText} />

							<Form.Button content='Submit' size='large'/>
						</Form.Group>
					</Form>
					</Grid>
					</Grid.Row>

					<br />

					<Grid.Row>
					<Item.Group divided>
						{this.state.reviews.map(review => <MovieReviews key={review.link.url} review={review}/>)}
					
					</Item.Group>
					</Grid.Row>
				</Grid.Column>
			</Grid>
		</div>

			)
	}
}
