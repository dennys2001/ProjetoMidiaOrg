import React, {Fragment, useEffect, useState} from "react";



const FilterEmployee = () => {
    const [employees, setEmployee] = useState([]);
    
        
    
    const [estrutura, setEstrutura] = useState([]);
             const getEstrutura = async () => {
                try {

                  const response = await fetch(`http://localhost:5000/allemployees/${estrutura.id_sub_estrutura}`)
                  const jsonData = await response.json()

                setEmployee(jsonData);
                console.log(estrutura.id_sub_estrutura);
                } catch (err) {
                    console.error(err.message)
                }
              
             };
    




return  <Fragment>    
    <div class="container text-center p-3 my-3 border">
    <h6>Pesquisar</h6>
    <div class="btn-group">



    <form>
        <select name="estruturas" class="custom-select"
                   value={`id${estrutura.id_sub_estrutura}`}
                   onChange={() => [setEstrutura(estrutura.id_sub_estrutura)]}>
        <option defaulfValue>Selecionar Estrutura</option>
        {employees.map(employee => (
          <option key={employee.id_sub_estrutura} value = {employee.id_sub_estrutura}> {employee.id_sub_estrutura}</option>
                        ))
                        }
                         
        </select>
      </form>  


<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal"
        onClick = {getEstrutura} 
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