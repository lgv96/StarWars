import React, { useState, useEffect } from 'react';
import Navbar from "./components/menu";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Home from "./components/Home";
import Personaje from "./components/Personaje";
import Planeta from "./components/Planeta";
import Peliculas from "./components/Peliculas";

function App() {
  const [personaje, setPersonaje] = useState( [] );
  const [planeta, setPlaneta] = useState( [] );
  const [peliculas, setPeliculas] = useState( [] );
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function fetchPersonaje() {
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setPersonaje(data.results);
      setCargando(false);
    }

    async function fetchPlaneta() {
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlaneta(data.results);
      setCargando(false);
    }

    async function fetchPeliculas() {
      let res = await fetch('https://swapi.dev/api/films/?format=json');
      let data = await res.json();
      setPeliculas(data.results);
      setCargando(false);
    }

    fetchPersonaje();
    fetchPlaneta();
    fetchPeliculas()
    

  }, []);

  return (
  <>
  <Router> 
    <Navbar />
    <Container>
    {cargando ? (
      <Dimmer active inverted>
        <Loader inverted> Cargando</Loader>
        </Dimmer>
      ):(      <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route exact path='/Personaje'>
      <Personaje data={personaje}/>
      </Route>
      <Route exact path='/Planeta'>
      <Planeta data={planeta} />
      </Route>
       <Route exact path='/Peliculas'>
      <Peliculas data={peliculas} />
      </Route>
    </Switch>

      )
    }
    
    </Container>

  </Router>

  </>
  );
}

export default App;