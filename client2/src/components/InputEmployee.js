import React, {Fragment, useState} from "react";

const InputEmployee = () => {
    const [level, setLevel] = useState("");
    const [nome, setName] = useState("");
    const [leaderId, setidLeader] = useState("");
    const [cargo, setCargo] = useState("");
    const [idEstrutura, setEstrutura] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { level, nome, leaderId, cargo, idEstrutura }
            const response = await fetch("http://localhost:5000/create", {
                method:"POST",
                headers: { "Content-Type": "application/json" },
                body:JSON.stringify(body)
           });

           // console.log(body);
            window.location = "/";
        } catch (err) {
            console.log(err.message);
        }
    };

    
    return (
    <Fragment>
        <h1 className="text-center mt-5">Org Chart Admin</h1>
        <form className="form-inline mt-5" onSubmit={onSubmitForm}>


            <div class="container">            
            <div className="row">
            <div class="col">
            <h5>Level:</h5>
            <input md-3
                type="text" 
                className="form-control" 
                value={level}
                onChange={e => setLevel(e.target.value)}
            />
            </div>
            <div class="col">
            <h5>Nome:</h5>
            <input 
                type="text" 
                className="form-control" 
                value={nome}
                onChange={e => setName(e.target.value)}
            />
            </div>
            <div class="col">
            <h5>Lider:</h5>
             <input 
                type="text" 
                className="form-control" 
                value={leaderId}
                onChange={e => setidLeader(e.target.value)}
            />
            </div>
            <div class="col">
            <h5>Cargo:</h5>
            <input 
                type="text" 
                className="form-control" 
                value={cargo}
                onChange={e => setCargo(e.target.value)}
            />
            </div>
            <div class="col">
            <h5>Estrutura:</h5>
            <input 
                type="text" 
                className="form-control" 
                value={idEstrutura}
                onChange={e => setEstrutura(e.target.value)}
            />
             <button className="btn btn-success">Add</button>
            </div>
            <div class="col">
            
            </div>
            </div>
            </div> 
           
            </form>

            


    </Fragment>
    );
};

export default InputEmployee;