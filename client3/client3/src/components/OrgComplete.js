import React, { Fragment, useState }  from "react";
import ViewStructure from "./ViewStructure";





const OrgComplete = () => {
   
    const [times, setTime] = useState([]);
        const getTime = async () => {
            try {

                const response = await fetch("http://localhost:5000/allemployees/diretores/todos")
                const jsonData = await response.json()
                
                setTime(jsonData);
                
            } catch (err) {
                console.error(err.message)
                
            }
            
        };
       
        
        useState((times) => {
            getTime();
        }, []);

      /*  const callTime = id => {
            console.log(id)
            return (
            <ViewStructure />
            );
        };*/



        return (

        <Fragment>
        <h1 className="text-center mt-5">Lista da estrutura</h1>
        <div className="container mt-3">
                           <h2></h2>
                    <p className="text-center mt-0">------------------------------------------------------------------</p> 

                <table className="table table-hover">
                    <thead>
                        <tr className="text-center">
                            <th>#ID</th>
                            <th>NOME</th>
                            <th>LEVEL</th>
                            <th>CARGO</th>
                            <th>LIDER</th>
                            <th>ESTRUTURA</th>
                            <th className="text-center">BUSCAR</th>
                            </tr>
                    </thead>    
                    <tbody>
                        {times.map(time => (
                            <tr className="text-center align-middle" key={time.id} > 
                                <td >{time.id}</td>
                                <td>{time.nome}</td>
                                <td>{time.level}</td>
                                <td>{time.cargo}</td>
                                <td>{time.lider_id}</td>
                                <td>{time.id_sub_estrutura}</td>
                                <td className="text-center align-middle"><ViewStructure time={time}  /></td>
                            </tr>
                        ))

                        }
                    </tbody>
                </table>
    
        </div>
     
        
        </Fragment>
        );
    }
export default OrgComplete;

//