import React, {Fragment, useEffect, useState} from "react";



const FilterEmployee = () => {
    const [employees, setEmployee] = useState([]);

        const getEmployees = async () => {
            try {

                const response = await fetch("http://localhost:5000/allemployees/estrutura/1007")
                const jsonData = await response.json()

                setEmployee(jsonData);
            } catch (err) {
                console.error(err.message)        
            }
        };

            useEffect(() => {
                getEmployees();
            }, []);
            //console.log(employees);
            
return  <Fragment>    
    <div class="container text-center p-3 my-3 border">
    <h6>Filter-Component</h6>
    <div class="btn-group">

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal"
        >
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
        
      <table className="table mt-5 text-center">
                        <thead>
                        <tr>
                            <th>Id#</th>
                            <th>Nome</th>
                            <th>Level</th>
                            <th>Cargo</th>
                            <th>Lider</th>
                            <th>Estrutura</th>

                        </tr>
                        </thead>
                        <tbody>
                        {employees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                               <td>{employee.nome}</td>
                               <td>{employee.level}</td>
                               <td>{employee.cargo}</td>
                               <td>{employee.lider_id}</td>
                               <td>{employee.id_sub_estrutura}</td>
                               

                            </tr>
                        ))

                        }
                        </tbody>
                    </table>





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