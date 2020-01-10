import React from 'react'
import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer'
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer'
import Header from './components/Header'

export default class App extends React.Component {

	constructor() {
		super()
		this.state = {
			showLatest: true
		}
	}

	changeLatest = (bool) => {
		this.setState({
			showLatest: bool
			})
	}

	render() {
		return (
		<React.Fragment>
			<Header />
			<SearchableMovieReviewsContainer changeLatest={this.changeLatest}/>



			{this.state.showLatest ? <LatestMovieReviewsContainer /> : null}
		</React.Fragment>
			)
	}
}