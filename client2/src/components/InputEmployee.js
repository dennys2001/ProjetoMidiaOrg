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
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>
            <h3>Level</h3>
            <input 
                type="text" 
                className="form-control" 
                value={level}
                onChange={e => setLevel(e.target.value)}
            />
            <h3>Nome</h3>
            <input 
                type="text" 
                className="form-control" 
                value={nome}
                onChange={e => setName(e.target.value)}
            />
            <h3>Lider</h3>
             <input 
                type="text" 
                className="form-control" 
                value={leaderId}
                onChange={e => setidLeader(e.target.value)}
            />
            <h3>Cargo</h3>
            <input 
                type="text" 
                className="form-control" 
                value={cargo}
                onChange={e => setCargo(e.target.value)}
            />
            <h3>Estrutura</h3>
            <input 
                type="text" 
                className="form-control" 
                value={idEstrutura}
                onChange={e => setEstrutura(e.target.value)}
            />
            <button className="btn btn-success">Add</button>
        </form>
    </Fragment>
    );
};

export default InputEmployee;