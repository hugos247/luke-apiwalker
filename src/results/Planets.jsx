import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Planets = (  ) => {


    const { id } = useParams();

    const [planets, setPlanets] = useState(null);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${ id }/`)
        .then( response => {
            setPlanets(response.data);
        })
        .catch(console.log(),[ id ])
    });

    if (planets == null) {
        return 'Loading'
    }

  return (
    <>
        <h1> { planets.name } </h1>
        <hr />
        <p> Terrain: { planets.terrain } </p>
        <p> Gravity: { planets.gravity } </p>
        <p> Population: { planets.population } </p>
        <p> Diameter: { planets.diameter } </p>
    </>
  )
}
