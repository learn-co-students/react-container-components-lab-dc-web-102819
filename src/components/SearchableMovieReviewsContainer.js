import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import { Button, Divider, Form, Container, Header, Card } from 'semantic-ui-react'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
	constructor(){
		super()
		this.state= {
			searchResults: [],
			searchValue: ''
		}
	}

	processChange = (event) => {
		this.setState({
			searchValue: event.target.value
		})
	}

	processForm = (event) => {
		event.preventDefault()
		console.log('processing form')
		const queryURL = URL + `&query=${this.state.searchValue}`
		fetch(queryURL)
			.then(response => response.json())
			.then(json => {
				if (json.results.length === 0) {
					alert("No results found for that search, please try again.")
				} else {
					this.setState({searchResults: json.results})
				}
			})
	}
	
	render() {
		return (
			<Container>
				<Header as='h2'></Header>
			    <Header as='h1'>Search for Movie Reviews</Header>
				<Form size='large' key="search-form">
					<Form.Group widths='equal'>
					  <Form.Field
					    label='Search'
					    control='input'
					    placeholder='Titanic'
					    name="search"
					    onChange={this.processChange}
					  />
					</Form.Group>
					<Button primary type='submit'
						onClick={this.processForm}>Submit</Button>
					<Divider hidden />
				</Form>
				<Card.Group 
					itemsPerRow={4} 
					className="latest-movie-reviews"> 
						{this.state.searchResults.map(review => <MovieReviews movie={review} />)}
						
				</Card.Group> 
			</Container>
		)
	}
}
//{this.state.searchResults.map(review => <MovieReviews movie={review} />)}

export default SearchableMovieReviewsContainer