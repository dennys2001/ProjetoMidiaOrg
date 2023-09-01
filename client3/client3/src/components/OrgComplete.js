import React, { Fragment, useState }  from "react";



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
        <div className="container mt-3">
        <div className="card"  style={{width:"250px", height:"200px"}} >
                    <div className="card-img-top" src="D:\Dev Environment\OrganogramaMidia\ProjetoMidiaOrg\ProjetoMidiaOrg\client3\client3\public\img_gerente.png" alt="Card image"/>
                    <div className="card-body">
                        <h4 className="card-title">John Doe</h4>
                        <p className="card-text">Some example text.</p>
                        <button className="btn btn-primary">See Profile</button>
                    </div>
                    </div>
        
                    <h2>Diretores Midia Dentsu Brasil</h2>
                    <p>------------------------------------------------------------------</p> 

                                        <table className="table table-hover">
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