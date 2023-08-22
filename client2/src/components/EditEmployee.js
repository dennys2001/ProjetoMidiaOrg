import React, { Fragment, useState } from "react";

const EditEmployee = ({ employee }) => {
    const [cargo , setCargo] = useState(employee.cargo);
    const [level , setLevel] = useState(employee.level);

    //edit function
    const updateRegistro = async(e) => {
        e.preventDefault();
        try {
          const body = { cargo, level };
          const response = await fetch(`http://localhost:5000/create/${employee.id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
          });
          //console.log(body);
          window.location = "/";
        } catch (err) {
            console.error(err.message);            
        }
    };

    return (
    <Fragment>

    <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#id${employee.id}`}>
    Editar
    </button>

<div className="modal" 
     id={`id${employee.id}`}
     onClick={() => [setLevel(employee.level), setCargo(employee.cargo)]} 
>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header" >
        <h4 className="modal-title" >Editar Registro</h4>
        <button 
            type="button"
            className="close" 
            data-dismiss="modal"
            onClick={() => [setLevel(employee.level), setCargo(employee.cargo)]} 
            >
        &times;
        </button>
      </div>


      <div className="modal-body">
        Level <input type='text' className="form-control" value={level} onChange={e => setLevel(e.target.value)}/>
        Cargo <input type='text' className="form-control" value={cargo} onChange={e => setCargo(e.target.value)}/>
      </div>

  
      <div className="modal-footer">
        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={e => updateRegistro(e)}>Salvar</button>
        <button 
           type="button" 
           className="btn btn-danger" 
           data-dismiss="modal"
           onClick={() => [setLevel(employee.level), setCargo(employee.cargo)]} 
           >
         Fechar
        </button>
      </div>

    </div>
  </div>
</div>
    </Fragment>
    );
};

export default EditEmployee;