import React, {Fragment, useState, useEffect} from "react";
import ListEmployee from "./ListEmployee";

const InputEmployee = () => {
    const [level, setLevel] = useState("");
    const [nome, setName] = useState("");
    const [leaderId, setidLeader] = useState("");
    const [cargo, setCargo] = useState("");
    const [idEstrutura, setEstrutura] = useState("");
/* INSERINDO O CAMPO DE MARCAS - 04/09 12:55*/
    const [marcas, setMarcas] = useState("");

    const [lideres, setListLider] = useState("");


    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { level, nome, leaderId, cargo, idEstrutura, marcas }
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

    const getListLider = async () => {
          try {
            const response = await fetch("http://localhost:5000/allemployees/nomes/todos")
            const jsonData = await response.json()

            setListLider(jsonData);
            
          } catch (err) {
            console.error(err.message)
            
          }      
          
    };

    useEffect(() => {
        getListLider();
    }, []);
    



    
    return (
    <Fragment>
        <h1 className="text-center mt-5">Org Chart Admin</h1>
        <form className="form-inline mt-5" onSubmit={onSubmitForm}>
            <div className="container">            
            <div className="row">
            <div className="col">
            <h5>Level:</h5>
            <select 
                type="text" 
                className="form-control" 
                value={level}
                onChange={e => setLevel(e.target.value)}
            >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            </div>
            <div className="col">
            <h5>Nome:</h5>
            <input 
                type="text" 
                className="form-control" 
                value={nome}
                onChange={e => setName(e.target.value)}
            />
            </div>
            <div className="col">
            <h5>Lider:</h5>
             <select 
                type="text" 
                className="form-control" 
                value={leaderId}
                onChange={e => setidLeader(e.target.value)}
            >
                    <option defaultValue>Selecione o Líder</option>
                        { lideres && lideres.map(lider => ( <option key={lider.id} value = {lider.id}>{lider.nome}</option>

                        ) )}
                   
            </select>
            </div>
            <div className="col">
            <h5>Cargo:</h5>
            <input 
                type="text" 
                className="form-control" 
                value={cargo}
                onChange={e => setCargo(e.target.value)}
            />
            </div>
            <div className="col">
            <h5>Estrutura:</h5>
            <input 
                type="text" 
                className="form-control" 
                value={idEstrutura}
                onChange={e => setEstrutura(e.target.value)}
            />
            </div>
            <div className="col">
            <h5>Marcas:</h5>
            <input 
                type="text" 
                className="form-control" 
                value={marcas}
                onChange={e => setMarcas(e.target.value)}
            />
            <button className="btn btn-success ml-3">Add</button>
            </div>
            
            
            <div className="col">

            </div>
            </div>
            </div>
                <div className="container">            
                <div className="row m-3"></div>
                
                
                </div>
            </form>
            
            </Fragment>

    );
};

export default InputEmployee;