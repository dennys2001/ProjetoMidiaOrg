import React, {Fragment, useEffect, useState} from "react";



const FilterEmployee = () => {
  const [employees, setEmployee] = useState([]);
  const getEmployees = async () => {

    try {

        const response = await fetch("http://localhost:5000/callemployees/callestruturas")
        const jsonData = await response.json()

        setEmployee(jsonData);
    } catch (err) {
        console.error(err.message)        
    }
   // console.log(employees);
};

    useEffect(() => {
        getEmployees();
    }, []);

       
    
    const [estrutura, setEstrutura] = useState([]);
    const [id_estrutura, setIdEstrutura] = useState([]);
             const getEstrutura = async e => {
 
                try {

                  const response = await fetch(`http://localhost:5000/allemployees/${id_estrutura}`)
                  const jsonData = await response.json()

                setEstrutura(jsonData);
               
                } catch (err) {
                    console.error(err.message)
                }
               // console.log(estrutura, id_estrutura);
             };
    




return  <Fragment>    
    <div class="container text-center p-3 my-3 border">
    <h6>Pesquisar</h6>
    <div class="btn-group">



    <form>
        <select name="estruturas" class="custom-select"
                   //value={`id${id_estrutura}`}
                   onChange={e => setIdEstrutura(e.target.value) }>
        <option defaultValue>Selecione o Time</option>
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
  <div class="modal-dialog modal-lg">
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
                        {estrutura.map(estrutura => (
                            <tr key={estrutura.id}>
                                <td>{estrutura.id}</td>
                               <td>{estrutura.nome}</td>
                               <td>{estrutura.level}</td>
                               <td>{estrutura.cargo}</td>
                               <td>{estrutura.lider_id}</td>
                               <td>{estrutura.id_sub_estrutura}</td>
                               

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