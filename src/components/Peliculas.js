import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

export default function Peliculas( {data }) {
	return(
		<>
		<h1>Pelicula</h1>
		<Grid columns={2}>
		{data.map((Peliculas, i) => {
			return(
			<Grid.Column key={i}>
			<Card>
			<Card.Content>
			<Card.Header>{Peliculas.title}</Card.Header>
			<Card.Description>
			<strong>Director</strong>
			<p>{Peliculas.director}</p>
			<strong>Fecha de estreno</strong>
			<p>{Peliculas.release_date}</p>
			
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