import { People } from "./results/People"
import { Films } from './results/Films'
import { Planets } from './results/Planets'
import { Species } from './results/Species'
import { Vehicles } from './results/Vehicles'
import { Starships } from './results/Starships'
import {  Routes, Route, BrowserRouter } from "react-router-dom"
import { SearchForm } from "./components/SearchForm"
 

//No pude terminar el formulario, pero si hice los paths correspondientes 

const StarWarsApp = () => { 

  return (
    <div className="StarWarsApp">
        <BrowserRouter>
          <Routes>
            <Route path="/" element= { <SearchForm /> }></Route>
            <Route path="/people/:id" element= { <People />}></Route>
            <Route path="/films/:id" element= { <Films />}></Route>
            <Route path="/planets/:id" element= { <Planets />}></Route>
            <Route path="/species/:id" element= { <Species />}></Route>
            <Route path="/starships/:id" element= { <Starships />}></Route>
            <Route path="/vehicles/:id" element= { <Vehicles />}></Route>
          </Routes>
        </BrowserRouter>
    </div>

  )
}

export default StarWarsApp