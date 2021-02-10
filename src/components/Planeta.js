import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

export default function Planeta({ data }) {
	return(
		<>
		<h1>Planetas</h1>
		 <Grid columns={3}>
		{data.map((Planeta, i) => {
			return(
			<Grid.Column key={i}>
			<Card>
			<Card.Content>
			<Card.Header>{Planeta.name}</Card.Header>
			<Card.Description>
			<strong>Climate</strong>
			<p>{Planeta.climate}</p>
			<strong>Diameter </strong>
			<p>{Planeta.diameter}</p>
			<strong>Population</strong>
			<p>{Planeta.population}</p>
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