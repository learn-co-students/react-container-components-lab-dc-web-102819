import React from 'react'
import { Card, Button, Header, Image, Modal, Grid  } from 'semantic-ui-react'

class MovieReivews extends React.Component {
	showModal(){
		const {headline, byline, critics_pick, summary_short, multimedia, link } = this.props.movie
		return (
			<Modal trigger={<Grid><Grid.Column textAlign="center"><Button>Show Full Review</Button></Grid.Column></Grid>}>
				<Modal.Header>{headline}</Modal.Header>
					<Modal.Content image>
						<Image wrapped size='medium' src={multimedia ? multimedia.src : 'https://pmcvariety.files.wordpress.com/2013/10/film-placeholder.jpg?w=1000&h=563&crop=1'} />
							<Modal.Description>
								<Header>by: {byline}</Header>
								<p>
									{summary_short}
								</p>
								<p>Continue reading on <a href={link.url}>NewYorkTimes.com</a></p>
						<p><strong>Critic Recommendation:</strong> {critics_pick === 1 ? "Watch this movie!" : "Don't waste your time."}</p>
					</Modal.Description>
				</Modal.Content>
			</Modal>
		)
	}


	render() {
		console.log(this.props.movie)

		const {display_title: title, byline, summary_short, multimedia } = this.props.movie
		return (
			<React.Fragment>
				<Card key={title}
				    image={multimedia ? multimedia.src : 'https://pmcvariety.files.wordpress.com/2013/10/film-placeholder.jpg?w=1000&h=563&crop=1'}
				    header={title}
				    meta={`by ${byline}`}
				    description={summary_short}
				    extra={this.showModal()}
				/>
			</React.Fragment>
		)
	}
}

export default MovieReivews

/*

				<Modal trigger={<Button>Show Modal</Button>}>
					<Modal.Header>Select a Photo</Modal.Header>
						<Modal.Content image>
							<Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
								<Modal.Description>
									<Header>Default Profile Image</Header>
									<p>
										We've found the following gravatar image associated with your e-mail
										address.
									</p>
							<p>Is it okay to use this photo?</p>
						</Modal.Description>
					</Modal.Content>
				</Modal>

*/