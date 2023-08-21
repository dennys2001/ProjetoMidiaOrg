import React, {Fragment, useEffect, useState} from "react";

const ListEmployee = () => {
    const [employees, setEmployee] = useState([]);

    //delete employee function

  const deleteEmployee = async id => {
    try {
      const deleteEmployee = await fetch(`http://localhost:5000/create/${id}`, { 
        method: "DELETE"
      });

      setEmployee(employees.filter(employees => employees.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };



        const getEmployees = async () => {
            try {

                const response = await fetch("http://localhost:5000/allemployees")
                const jsonData = await response.json()

                setEmployee(jsonData);
            } catch (err) {
                console.error(err.message)        
            }
        };

            useEffect(() => {
                getEmployees();
            }, []);
            console.log(employees);
            return(
                <Fragment>
                    <table className="table mt-5 text-center">
                        <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Level</th>
                            <th>Cargo</th>
                            <th>Lider</th>
                            <th>Estrutura</th>
                            <th>Editar</th>
                        </tr>
                        </thead>
                        <tbody>
                        {employees.map(employee => (
                            <tr>
                               <td>{employee.nome}</td>
                               <td>{employee.level}</td>
                               <td>{employee.cargo}</td>
                               <td>{employee.lider_id}</td>
                               <td>{employee.id_sub_estrutura}</td>
                               <td><button className="btn btn-danger" onClick={() => deleteEmployee(employees.id)}>Apagar</button><button className="btn btn-info m-1">Editar</button></td>
                            </tr>
                        ))

                        }
                        </tbody>
                    </table>
                </Fragment>
            );
        };

export default ListEmployee;

//achar porque que o ID fica undefined