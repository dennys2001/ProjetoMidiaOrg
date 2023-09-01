import React, { Fragment } from "react";


const ViewStructure = ({ time }) => {
    
    console.log(time);
    return (
        <Fragment>

   
<div className="container mt-3">
  
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
    Open modal
  </button>
</div>


<div class="modal fade" id="myModal">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">


      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>


      <div class="modal-body">
        Modal body..
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
