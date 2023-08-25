import React, {Fragment, useState} from "react";

const FilterEmployee = ({employee}) => {
   const [id_sub_estrutura , setIdSubEstrutura] = useState(employee.id_sub_estrutura);

   const filtraRegistro = async(e) => {
    e.preventDefault();
    try {
      const body = { id_sub_estrutura };
      const response = await fetch(`http://localhost:5000/allemployees/estrutura/${employee.id_sub_estrutura}`, {
        method: "GET",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
      //console.log(body);
      window.location = "/";
    } catch (err) {
        console.error(err.message);            
    }
};


return  <Fragment>    
    <div class="container text-center p-3 my-3 border">
    <h6>Filter-Component</h6>
    <div class="btn-group">
    <button type="button" class="btn btn-primary ml-4" data-toggle="modal" data-target={`#id_sub_estrutura${"A"}`}>Time A</button>
    <button type="button" class="btn btn-primary ml-4">Time B</button>
    <button type="button" class="btn btn-primary ml-4">Time C</button>
    <button type="button" class="btn btn-primary ml-4">Time D</button>
    <button type="button" class="btn btn-primary ml-4">Time E</button>
    <button type="button" class="btn btn-primary ml-4">Time F</button>
    <button type="button" class="btn btn-primary ml-4">Time G</button>
</div>
    </div>


   



    </Fragment>

};


export default FilterEmployee;