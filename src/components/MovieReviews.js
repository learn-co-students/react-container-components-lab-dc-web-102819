// Code MovieReviews Here
import React from 'react'
import { Card } from 'semantic-ui-react'

const MovieReviews = props => {
    console.log(props)
    return (
        <Card.Group itemsPerRow={4} className='review-list'>
            {props.reviews.map(review => 
                <Card 
                    className = 'review'
                    key={review.display_title}
                    image={review.multimedia}
                    header={review.display_title}
                    meta={review.headline}
                    description = {review.summary_short}
                    extra={review.byline}
                    color='red'
                />)
            }
        </Card.Group>
    )
}

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews