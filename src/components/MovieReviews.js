// Code MovieReviews Here
import React from 'react'

const MovieReviews = props => 
    <ul className='review-list'>
        {props.reviews.map(flick => <li className='review' key={flick.display_title}>{flick.display_title}: {flick.summary_short}</li>)}
    </ul>

export default MovieReviews