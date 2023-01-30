import { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

export const Starships = (  ) => {



    const { id } = useParams();
    const [starships, setStarships] = useState(null);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${ id }/`)
        .then( response => {
            setStarships(response.data);
        })
        .catch(console.log(),[ id ])
    });

    if (starships == null) {
        return 'Loading'
    }

  return (
    <>
        <h1> { starships.name } </h1>
        <hr />
        <p> Model: { starships.model } </p>
        <p> Manufacturer: { starships.manufacturer } </p>
        <p> Length: { starships.length } </p>
        <p> Passengers: { starships.passengers } </p>
    </>
  )
}
