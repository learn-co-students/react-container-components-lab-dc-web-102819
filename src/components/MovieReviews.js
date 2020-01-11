import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const MovieReviews = (props) => {
  let {display_title, summary_short}= props.reviews
  return (
    <div className='review-list'>
      <h1>{display_title}</h1>
      {/* <img src={src}/> */}
      <p>{summary_short}</p>
    </div>
    // <Card.Group>
    //   <Card>
    //     <Image
    //       floated='right'
    //       size='mini'
    //       src={src}
    //       wrapped ui={false}
    //     />
    //     <Card.Content>
    //       <Card.Header>{display_title}</Card.Header>
    //       <Card.Meta>Friends of Elliot</Card.Meta>
    //       <Card.Description>
    //         {summary_short}
    //       </Card.Description>
    //     </Card.Content>
    //   </Card>
    // </Card.Group>
  )
}

export default MovieReviews
