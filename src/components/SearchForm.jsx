import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { People } from "../results/People";

export const SearchForm = () => {



  //No pude terminar el formulario!
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    data: "",
    id: '',
  });


  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormState({
  //     ...formState,
  //     [ name ] : value,
  //   });

  //}

    
  return (
    <form>
      <select>
        <option>People</option>
        <option>Films</option>
        <option>Starships</option>
        <option>Vehicles</option>
        <option>Planets</option>
        <option>Species</option>
        </select>
    </form>

  )
}
