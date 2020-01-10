import React from 'react'
import {Header, Icon} from 'semantic-ui-react'

const MyHeader = () => {
	return (
		<div>
			<Header as='h1' icon textAlign='center'>
     			 <Icon name='film' circular />
      			<Header.Content>Movie Reviews</Header.Content>
    		</Header>
    		<br />
    		<br />
    		


		</div>

		)
}

export default MyHeader