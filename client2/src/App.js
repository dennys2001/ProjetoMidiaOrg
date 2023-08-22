import React, {Fragment} from "react";
import './App.css';

//components
import InputEmployee from "./components/InputEmployee";
import ListEmployee from "./components/ListEmployee";
import SearchByTeam from "./components/Search";

function App() {
  return <Fragment>
          <div className="container">
          <InputEmployee />
          <SearchByTeam />
          <ListEmployee /> 
          </div>
        </Fragment>;
}

export default App;
