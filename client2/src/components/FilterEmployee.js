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

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
  Busca Time
</button>


<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">


      <div class="modal-header">
        <h4 class="modal-title">Estrutura do Time</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>


      <div class="modal-body">
        Modal body..
      </div>


      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
    </div>
    </div>


   



    </Fragment>

};


export default FilterEmployee;