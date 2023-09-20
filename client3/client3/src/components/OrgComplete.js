import React, { Fragment, useState }  from "react";
import ViewStructure from "./ViewStructure";
import image1 from "./img/logo192.png"





const OrgComplete = () => {

    const [diretoria, setTime] = useState([]);
        const getTime = async () => {
            try {

                const response = await fetch("http://localhost:5000/allemployees/diretores/todos")
                const jsonData = await response.json()
                
                setTime(jsonData);
                
            } catch (err) {
                console.error(err.message)
                
            }
            
        };
       
        
        useState((diretoria) => {
            getTime();
        }, []);

//-------------------------------------------------downward------
   
//-------------------------------------------------downward------

        return (
            <Fragment>
        
                <div className="container p-5 my-5 bg-dark text-white">
                    <h1>Know Our Team</h1>
                    <p>Agora só faltam as fotos</p>
                    
                    <div className="row">
                     {diretoria.map((diretor) =>  (
                        <div className="col-sm-3 p-3 bg-white text-black" key={diretor.id} >
                           
                            <div className="card align-center bg-light text-dark"
                                 >
                                <img className="card-img-top rounded-circle border" src={ image1 } alt="Card image"  />
                                <div className="card-body">
                                    <h4 className="card-title">{diretor.nome}</h4>
                                    <p className="card-text">{diretor.cargo}</p>
                                    <ViewStructure time={diretor.id}  />
                                    
                                </div>
                             
                            
                            
                            </div>
                                
                        </div>
                     ))}
                   </div>
                </div>

            </Fragment>
            
        );

               
        };
export default OrgComplete;