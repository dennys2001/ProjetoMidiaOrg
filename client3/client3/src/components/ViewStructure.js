import React, { Fragment, useState } from "react";


const ViewStructure = ({ time }) => {
    const [id] = useState(time.id);
   console.log(time);

    //------------------------------------------------------------------------------------------

    const getFilhos = async id => {
        console.log("clicou nos filhos de", id);
        try {

            const response = await fetch(`http://localhost:5000/allemployees/${id}`)
            const jsonData = await response.json()
        
        } catch (err) {
            console.error(err.message);
        }
    }

    //-------------------------------------------------------------------------------------------

    return (
        <Fragment>

   
<div className="container mt-3">
  
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${time.id}`}
onClick={() => getFilhos(time.id)}>
    Open modal
  </button>
</div>


<div class="modal fade" id={`id${time.id}`}>
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">


      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>


      <div class="modal-body">
      <input type='text' className="form-control" value={id}/>
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



//const EditEmployee = ({ employee }) => {
  //  const [cargo , setCargo] = useState(employee.cargo);
    //const [level , setLevel] = useState(employee.level);
