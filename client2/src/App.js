import React, {Fragment} from "react";
import './App.css';

//components
import InputEmployee from "./components/InputEmployee";
import ListEmployee from "./components/ListEmployee";
import FilterEmployee from "./components/FilterEmployee";
import InputNew from "./components/InputNew";

function App() {
  return <Fragment>
          <div className="container">
          <InputNew />
          <ListEmployee />
          
          </div>
        </Fragment>;
}

export default App;
