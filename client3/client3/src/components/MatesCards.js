import React, { Fragment, useRef, useEffect, useState } from "react";
import image1 from "./img/logo192.png"



const MatesCards = ({ filhos }) => {
    const myComponentRef = useRef(null);

  console.log(filhos)

    




    useEffect(() => {
        if (myComponentRef.current) {
          myComponentRef.current.focus();
        }
      }, []);

    return (
    <Fragment>
        <div tabIndex={-1} ref={myComponentRef}>
             {/* Your component content */}
    
            
            
            <div className="container p-5 my-5 bg-dark text-white">
                    <h1>Know Our Team</h1>
                    <p>Agora só faltam as fotos</p>
                    
                    <div className="row">
                     {filhos.map((filho) =>  (
                        <div className="col-sm-3 p-3 bg-white text-black" key={filho.id} >
                           
                            <div className="card align-center bg-light text-dark"
                                 >
                                <img className="card-img-top rounded-circle border" src={ image1 } alt="Card image"  />
                                <div className="card-body">
                                    <h4 className="card-title">{filho.nome}</h4>
                                    <p className="card-text">{filho.cargo}</p>
                                    
                                    
                                </div>
                             
                            
                            
                            </div>
                                
                        </div>
                     ))}
                   </div>
                </div>



            </div>
            
       

    </Fragment>
);
};

export default MatesCards;