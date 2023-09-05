import React, { Fragment, useState } from "react";

const ViewStructure = ({ time }) => {
    const [id] = useState(time.id);
    const [filhos, setFilhos] = useState([]);
    
   console.log(time);
   
    //------------------------------------------------------------------------------------------

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
    //-------------------------------------------------------------------------------------------

    


    //-------------------------------------------------------------------------------------------


    return (
        <Fragment>

   
<div className="container mt-3">
  
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${time.id}`}
onClick={() => getFilhos(time.id)}>
    Abrir Estrutura
  </button>
</div>


<div class="modal fade" id={`id${time.id}`}>
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">


      <div class="modal-header">
        <h4 class="modal-title">Team</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>


      <div class="modal-body">
     

      <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>#ID</th>
                            <th>NOME</th>
                            <th>LEVEL</th>
                            <th>CARGO</th>
                            <th>LIDER</th>
                            <th>CLIENTE</th>
                            <th>MARCAS</th>
                            </tr>
                    </thead>    
                    <tbody>
                        {filhos.map(filho => (
                            <tr key={filho.id} > 
                                <td>{filho.id}</td>
                                <td>{filho.nome}</td>
                                <td>{filho.level}</td>
                                <td>{filho.cargo}</td>
                                <td>{filho.lider_id}</td>
                                <td>{filho.id_sub_estrutura}</td>
                                <td><span class="badge bg-secondary inline-block" key={[filho.marcas]}>
                                    {filho.marcas}</span></td>
                            </tr>
                        ))

                        }
                    </tbody>
                </table>






      </div>

 
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>


          </Fragment>

        );
      };



export default ViewStructure;
