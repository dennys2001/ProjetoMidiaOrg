import React, {Fragment, useState} from "react";

const FilterEmployee = ({employee}) => {
    const [id_sub_estrutura, employees, setEmployee] = useState([]);

   const getEmployees = async (id_sub_estrutura) => {
    try {

        const response = await fetch(`http://localhost:5000/allemployees/estrutura/${id_sub_estrutura}`)
        const jsonData = await response.json()

        setEmployee(jsonData);
    } catch (err) {
        console.error(err.message)        
    }
};

return  <Fragment>    
    <div class="container text-center p-3 my-3 border">
    <h6>Filter-Component</h6>
    <div class="btn-group">

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal"
        onClick={(getEmployees[employees.id_sub_estrutura = `A`])}>
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
        {employees.id_sub_estrutura}
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