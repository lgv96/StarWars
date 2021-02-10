import React from 'react';
import ReactPlayer from 'react-player';

export default function Home() {
	return(
		<div className= "App" style={{ width:'100%', height:'100%', position: 'absolute'}}>
		<ReactPlayer
		url='https://www.youtube.com/watch?v=RDh_aOXT0QI&ab_channel=SomosGeeks'
		width='100%'
		height='100%'
		controls
		playing
		onEnded={()=>alert('Termino el Video')}

		/>


		</div>
		);
}