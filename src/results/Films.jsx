
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Films = ( ) => {

    const { id } = useParams();

    const [films, setFilms] = useState(null);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/films/${id}/`)
        .then( response => {
            setFilms(response.data);
        })
        .catch(console.log(),[ id ])
    });

    if (films == null) {
        return 'Loading'
    }

  return (
    <>
        <h1> { films.title } </h1>
        <hr />
        <p> Director: { films.director } </p>
        <p> Producer: { films.producer } </p>
        <p> Release: { films.release_date } </p>
        <p> Characters: { films.characters } </p>
    </>
  )
}
