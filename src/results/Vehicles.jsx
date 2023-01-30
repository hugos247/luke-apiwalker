import { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

export const Vehicles = ( ) => {



    const { id } = useParams();
    const [vehicles, setVehicles] = useState(null);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/vehicles/${ id }/`)
        .then( response => {
            setVehicles(response.data);
        })
        .catch(console.log(),[ id ])
    });

    if (vehicles == null) {
        return 'Loading'
    }

  return (
    <>
        <h1> { vehicles.name } </h1>
        <hr />
        <p> Model: { vehicles.height } </p>
        <p> Manufacturer: { vehicles.manufacturer } </p>
        <p> Length: { vehicles.length } </p>
        <p> Passengers: { vehicles.passengers } </p>
    </>
  )
}
