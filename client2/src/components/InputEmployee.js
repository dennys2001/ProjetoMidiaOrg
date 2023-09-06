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
    const [listCargos, setListCargos] = useState("");

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
    

    //==================Inserindo auto-complete no Cargo====================//    

    const getListCargos = async () => {
        try {
          const response = await fetch("http://localhost:5000/allemployees/cargos/todos")
          const jsonData = await response.json()

          setListCargos(jsonData);
          
        } catch (err) {
          console.error(err.message)
          
        }      
        
        };

        useEffect(() => {
            getListCargos();
        }, []);


     //==================Inserindo auto-complete no Cargo====================//  





    
    return (
    <Fragment>
        
        <h1 className="text-center mt-5">Org Chart Admin</h1>
        <form className="form-inline mt-5" onSubmit={onSubmitForm}>
                      
            
   
            <div className="input-group mb-3 input-group-lg">

            <label for="cargoDataList" class="form-label ml-1">Nome:</label>
                                <select 
                                        type="text" 
                                        className="form-control"
                                        
                                        value={level}
                                        onChange={e => setLevel(e.target.value)}>
                                            <option>Selecione o Nível</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                </select>
            </div>
            <div className="input-group mb-3 input-group-lg">    
            <label for="cargoDataList" class="form-label ml-5">Nome:</label>
                                    <input 
                                        type="text" 
                                        className="form-control ml-1"
                                        placeholder="Digite o Nome"
                                        value={nome}
                                        onChange={e => setName(e.target.value)}
                                    />
            </div>

            <div className="input-group mb-3 input-group-lg">
                        <label for="cargoDataList" class="form-label ml-4">Lider:</label>
                                <select 
                                    type="text" 
                                    className="form-control ml=2"
                                    
                                    value={leaderId}
                                    onChange={e => setidLeader(e.target.value)}
                                >
                                        <option defaultValue>Selecione:</option>
                                            { lideres && lideres.map(lider => ( <option key={lider.id} value = {lider.id}>{lider.nome}</option>

                                            ) )} 
                                </select>
            </div>
            <div className="input-group mb-3 input-group-lg">                       
                                            <label for="cargoDataList" class="form-label ml-1">Cargo:</label>
                                            <input className="form-control ml-1" 
                                                list="datalistOptions" 
                                                id="cargoDataList" 
                                                placeholder="Digite para buscar..."
                                                value={cargo}
                                                onChange={e => setCargo(e.target.value)}/>
                                            <datalist id="datalistOptions">
                                            { listCargos && listCargos.map(lCargo => ( 
                                                <option key={lCargo.cargo} value = {lCargo.cargo}>{lCargo.cargo}</option>

                                                ) )}
                                            </datalist>
                
{/*-----------------Inserido Campo Cargo Dinamico no Form---------------------*/}

{/*--Retirado Campo Cargo Como Input Livre-------------------------------------------
            <div className="col">
            <label><h5>Cargo:</h5></label>
            <input 
                type="text" 
                className="form-control" 
                value={cargo}
                onChange={e => setCargo(e.target.value)}
            />
            </div>
----Retirado Campo Cargo Como Input Livre-----------------------------------------*/}

            <label className="usr ml-3" for="usr ml-3">Estrutura:</label>
            <input 
                type="text" 
                className="form-control ml-1"
                placeholder="Insira a Estrutura"
                value={idEstrutura}
                onChange={e => setEstrutura(e.target.value)}
            />
             <label className="usr ml-3" for="usr ml-3">Marcas:</label>
             <input 
                type="text" 
                className="form-control ml-1"
                placeholder="Insira a(s) marca(s)"
                value={marcas}
                onChange={e => setMarcas(e.target.value)}
            />
            <button className="btn btn-success ml-4">Adicionar</button>
        
            </div>
           
            </form>
            
            </Fragment>

    );
};

export default InputEmployee;