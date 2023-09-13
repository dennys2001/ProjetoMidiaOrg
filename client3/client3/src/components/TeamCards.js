import React, { Fragment, useState } from "react";
import image1 from "./img/logo192.png"




const TeamCards = ({ diretoria }) => {
    const [filhos, setFilhos] = useState([]);
 

    const getFilhos = async id => {
         console.log("clicou nos filhos de", id);
         try {
 
             const response = await fetch(`http://localhost:5000/allemployees/subestrutura/${id}`)
             const jsonData = await response.json()
 
             setFilhos(jsonData);
         } catch (err) {
             console.error(err.message);
         }
     }

    return (
    <Fragment>

        <div class="container p-5 my-5 bg-dark text-white">
            <h1>Conheça Nosso Time</h1>
            <p>Agora só faltam as fotos</p>
            
            <div class="row">
             {diretoria.map(diretor =>  (
                <div class="col-sm-3 p-3 bg-white text-black" key={diretor.id}>
                   
                    <div class="card align-center"
                    onClick={() => getFilhos(diretor.id)} >
                        <img class="card-img-top rounded-circle" src={ image1 } alt="Card image" />

                        <div class="card-body">
                        <h4 class="card-title">{diretor.nome}</h4>
                        <p class="card-text">{diretor.cargo}</p>
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