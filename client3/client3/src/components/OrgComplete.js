import React, { Fragment, useState, useEffect }  from "react";

const OrgComplete = () => {
    const [time, setTime] = useState([]);
        const getTime = async () => {
            try {

                const response = await fetch("http://localhost:5000/allemployees/diretores/todos")
                const jsonData = await response.json()
                
                setTime(jsonData);
                
            } catch (err) {
                console.error(err.message)
                
            }
            
        };
        console.log(time);
        useState(() => {
            getTime();
        }, []);




        return (
        <Fragment>
                    <h1 className="text-center mt-5">Esse é o Rolê</h1>
                    <div class="container mt-3">
                    <h2>Diretores Midia Dentsu Brasil</h2>
                    <p>------------------------------------------------------------------</p> 
                    <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>#ID</th>
                            <th>NOME</th>
                            <th>LEVEL</th>
                            <th>CARGO</th>
                            <th>LIDER</th>
                            <th>ESTRUTURA</th>
                            </tr>
                    </thead>    
                    <tbody>
                        {time.map(time => (
                            <tr key={time.id}>
                                <td>{time.id}</td>
                               <td>{time.nome}</td>
                               <td>{time.level}</td>
                               <td>{time.cargo}</td>
                               <td>{time.lider_id}</td>
                               <td>{time.id_sub_estrutura}</td>
                               
                       
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