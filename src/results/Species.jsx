import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


export const Species = (  ) => {


    const { id } = useParams();
    const [species, setSpecies] = useState(null);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/species/${ id }/`)
        .then( response => {
            setSpecies(response.data);
        })
        .catch(console.log(),[ id ])
    });

    if (species == null) {
        return 'Loading'
    }

  return (
    <>
        <h1> { species.name } </h1>
        <hr />
        <p> Classification: { species.classification } </p>
        <p> Average height: { species.average_height } </p>
        <p> Skin colors: { species.skin_colors } </p>
        <p> Eye colors: { species.eye_colors } </p>
    </>
  )
}
