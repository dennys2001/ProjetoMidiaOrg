import React, { Fragment, useState } from "react";
import image1 from "./img/logo192.png"
import ViewStructure from "./ViewStructure"
import 'bootstrap/dist/css/bootstrap.min.css';


const TeamCards = ({ diretoria }) => {
    const [filhos, setFilhos] = useState([""]);
 

    const getFilhos = async id => {
         //console.log("clicou nos filhos de", id);
         try {
 
             const response = await fetch(`http://localhost:5000/allemployees/subestrutura/${id}`)
             const jsonData = await response.json()
 
             setFilhos(jsonData);
           
         } catch (err) {
             console.error(err.message);
         }
        
     };

     useState((filhos) => {
        getFilhos();
    }, []);

    return (
    <Fragment>

        <div className="container p-5 my-5 bg-dark text-white">
            <h1>Know Our Team</h1>
            <p>Agora só faltam as fotos</p>
            
            <div className="row">
             {diretoria.map(diretor =>  (
                <div className="col-sm-3 p-3 bg-white text-black" key={diretor.id}>
                   
                    <div className="card align-center bg-light text-dark"
                         >
                        <div className="container mt-5">
                             <div className="d-flex justify-content-center">    
                                <img className="rounded-circle border" src={ diretor.image } alt="Card image" style={{ width: '150px', height: '150px' }}  />
                             </div>
                        </div>    
                            
                        <div className="card-body">
                            <h4 className="card-title">{diretor.nome}</h4>
                            <p className="card-text">{diretor.cargo}</p>
                            <ViewStructure time={diretor}  />
                        </div>
                     
                    </div>
                   
                </div>

))}
            </div>
        </div> 

    </Fragment>
);
};

export default TeamCards;