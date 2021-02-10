import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

export default function Personaje( {data }) {
	return(
		<>
		<h1>Personaje</h1>
		<Grid columns={3}>
		{data.map((Personaje, i) => {
			return(
			<Grid.Column key={i}>
			<Card>
			<Card.Content>
			<Card.Header>{Personaje.name}</Card.Header>
			<Card.Description>
			<strong>Altura</strong>
			<p>{Personaje.height}</p>
			<strong>Mass</strong>
			<p>{Personaje.mass}</p>
			<strong>Hair Color</strong>
			<p>{Personaje.hair_color}</p>
			</Card.Description>
			</Card.Content>
			</Card>



			</Grid.Column>)
		}
		)
	}
		</Grid>
		</>
		);
}