import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<Menu inverted>
		<Container>
		<Link to='/'>
		<Menu.Item name='Resumen de Star Wars' />
		</Link>
		<Link to='/Personaje'>
		<Menu.Item name='Personaje' />
		</Link>
		<Link to='/Planeta'>
		<Menu.Item name='Planetas' />
		</Link>
		<Link to='/Peliculas'>
		<Menu.Item name='Peliculas' />
		</Link>
		</Container>
		</Menu>

		);
}