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
    <div className="container text-center p-3 my-3 border">
    <h6>Pesquisar</h6>
    <div className="btn-group">



    <form>
        <select name="estruturas" className="custom-select"
                onChange={e => setIdEstrutura(e.target.value) }>
        <option defaultValue>Selecione o Time</option>
        {employees.map(employee => (
          <option key={employee.id_sub_estrutura} value = {employee.id_sub_estrutura}> {employee.id_sub_estrutura}</option>
                        ))
                        }
                         
        </select>
      </form>  


<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal"
        onClick = {getEstrutura} 
        >
  Busca Time
</button>


<div className="modal" id="myModal">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title">Estrutura do Time</h4>
        <button type="button" className="close" data-dismiss="modal">&times;</button>
      </div>


      <div className="modal-body">
        
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


      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
    </div>
    </div>
    </Fragment>
};

export default FilterEmployee;