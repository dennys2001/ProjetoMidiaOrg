import React, {Fragment, useEffect, useState} from "react";
import EditEmployee from "./EditEmployee";
import FilterEmployee from "./FilterEmployee";

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
            //console.log(employees);
            return(
                <Fragment>
                     <FilterEmployee employees={employees} />   
                    <table className="table mt-5 text-center">
                        <thead>
                        <tr>
                            <th>Id#</th>
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
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                               <td>{employee.nome}</td>
                               <td>{employee.level}</td>
                               <td>{employee.cargo}</td>
                               <td>{employee.lider_id}</td>
                               <td>{employee.id_sub_estrutura}</td>
                               <td><button className="btn btn-danger mr-1" onClick={() => deleteEmployee(employee.id)}>Apagar</button>
                               <EditEmployee employee={employee} />
                                </td>
                            </tr>
                        ))

                        }
                        </tbody>
                    </table>
                </Fragment>
            );
        };

export default ListEmployee;

