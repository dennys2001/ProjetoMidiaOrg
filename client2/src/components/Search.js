import React, { Fragment } from "react";

const SearchByTeam = () => {
    return(
        <Fragment>
            
        <div class="container">
            <label for="sel1">Estrutura:</label>    
            <select class="form-control" id="Search">
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>E</option>
                <option>F</option>
                <option>G</option>
            </select>
           
            <button class="btn btn-success" type="submit">Search</button>
            
        </div>
       
        </Fragment>
        
    )
    
};

export default SearchByTeam;




/*
<div class="col">
            <label for="sel1">Estrutura:</label>    
            <select class="form-control" id="Search" onChange={e => pesquisaEstrutura(e)}>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>E</option>
                <option>F</option>
                <option>G</option>
            </select>
           
            <button class="btn btn-success" type="submit">Search</button>
            
            </div>
*/




