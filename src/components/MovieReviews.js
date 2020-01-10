// Code MovieReviews Here
import React from 'react'
import { Image, Item, Button, Icon} from 'semantic-ui-react'

const MovieReviews = (props) => {
	 const { display_title, byline, headline, summary_short, publication_date, link: {url}} = props.review

	return (
	<Item>
      <Item.Image size='medium' 
      src={props.review.multimedia ? props.review.multimedia.src : 'https://negratinta.com/wp-content/uploads/2017/01/placeholder-260x170.png'} 
      />

      <Item.Content >
        <Item.Header>{display_title}</Item.Header>
        <Item.Meta>
          <span className='price'>{headline}</span>
          <br />
          <span className='stay'>Written By: {byline}</span>
          
        </Item.Meta>
        <Item.Description>{summary_short}</Item.Description>
          <Item.Extra>
        <span className='stay' floated='left' >Published: {publication_date}</span>
          <a href={url} target="_blank">
          	<Button primary floated='right'>
            View Article
            <Icon name='right chevron' />
         </Button>
         </a>
        </Item.Extra>

      </Item.Content>
    </Item>




	
		)
}



export default MovieReviews
