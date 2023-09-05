import React, { Fragment, useState } from "react";
import BadgeList from "./BadgeList";



const ViewStructure = ({ time }) => {
    const [id] = useState(time.id);
    const [filhos, setFilhos] = useState([]);
    const [itemList] = useState([filhos.marcas]);
   
   
    //------------------------------------------------------------------------------------------

    const getFilhos = async id => {
       // console.log("clicou nos filhos de", id);
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
  
<button type="button" className="btn btn-primary text-center align-middle" data-bs-toggle="modal" data-bs-target={`#id${time.id}`}
onClick={() => getFilhos(time.id)}>
    Abrir Estrutura
  </button>
</div>


<div className="modal fade" id={`id${time.id}`}>
  <div className="modal-dialog modal-fullscreen">
    <div className="modal-content">


      <div className="modal-header">
        <h4 className="modal-title">Team</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>


      <div className="modal-body">
     

      <table className="table table-hover" >
                    <thead>
                        <tr>
                            <th className="text-center">#ID</th>
                            <th className="text-center">NOME</th>
                            <th className="text-center">LEVEL</th>
                            <th className="text-center">CARGO</th>
                            <th className="text-center">LIDER</th>
                            <th className="text-center">CLIENTE</th>
                            <th className="text-center">MARCAS</th>
                            </tr>
                    </thead>    
                    <tbody>
                        {filhos.map(filho => (
                            <tr key={filho.id}> 
                                <td className="center">{filho.id}</td>
                                <td className="text-center">{filho.nome}</td>
                                <td className="text-center">{filho.level}</td>
                                <td className="text-center">{filho.cargo}</td>
                                <td className="text-center">{filho.lider_id}</td>
                                <td className="text-center">{filho.id_sub_estrutura}</td>
                                <td key={filho.id} >
                                  <BadgeList itemList={filho.marcas}/>
                                  {console.log(filho.marcas)}
                             
                                </td>

                            </tr>
                        ))

                        }
                    </tbody>
                </table>






      </div>

 
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>


          </Fragment>

        );
      };



export default ViewStructure;
