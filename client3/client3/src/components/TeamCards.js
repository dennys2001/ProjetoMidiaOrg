import React, { Fragment } from "react";
import image1 from "./img/img_gerente.png"
const TeamCards = () => {
   
    return (
    <Fragment>

        <div class="container p-5 my-5 bg-dark text-white">
            <h1>Teste Render Card</h1>
            <p>Só falta Fazer Dinâmico</p>
            
            <div class="row">
                <div class="col-sm-3 p-3 bg-white text-black">
                    <div class="card" >
                        <img class="card-img-top" src={image1} alt="Card image" />

                        

                        <div class="card-body">
                        <h4 class="card-title">Beka</h4>
                        <p class="card-text">Gerente da Porra Toda</p>
                        </div>
                    </div>
                
                </div>

                <div class="col-sm-3 p-3 bg-warning text-white">
                    <div class="card" >
                        <img class="card-img-top" src={image1} alt="Card image" />
                        <div class="card-body">
                        <h4 class="card-title">Beka</h4>
                        <p class="card-text">Gerente da Porra Toda</p>
                        </div>
                    </div>
                </div>
                
                
                <div class="col-sm-3 p-3 bg-primary text-white">.col</div>
                <div class="col-sm-3 p-3 bg-white text-dark">.col</div>
            </div>
        </div> 

    </Fragment>
);
};

export default TeamCards;