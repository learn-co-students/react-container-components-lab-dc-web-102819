import React from 'react'
import { Card } from 'semantic-ui-react'

class MovieReivews extends React.Component {
	render() {
		const {display_title: title, byline, summary_short, multimedia } = this.props.movie
		return (
			<Card key={title}
			    image={multimedia ? multimedia.src : 'https://pmcvariety.files.wordpress.com/2013/10/film-placeholder.jpg?w=1000&h=563&crop=1'}
			    header={title}
			    meta={`by ${byline}`}
			    description={summary_short}
			/>
		)
	}
}

export default MovieReivews