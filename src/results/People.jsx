
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const People = (   ) => {

    const { id } = useParams();
    const [people, setPeople] = useState(null);

    

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then( response => {
            setPeople(response.data);
        })
        .catch((err) =>
        console.log(err)
        ,[id])
        });

    if (people == null) {
        return 'Loading'
    }

  return (
    <>
        <h1> { people.name } </h1>
        <hr />
        <p> Height: { people.height } </p>
        <p> Mass: { people.mass } </p>
        <p> Gender: { people.gender } </p>
        <p> Homeworld: { people.homeworld } </p>
    </>
  )
}
