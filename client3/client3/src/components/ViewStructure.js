import React, { Fragment, useState } from "react";
import BadgeList from "./BadgeList";
import MatesCards from "./MatesCards";


const ViewStructure = ({ time }) => {
    const [id] = useState(time.id);
    const [filhos, setFilhos] = useState([]);
    const [itemList] = useState([filhos.marcas]);
    const [isSecondaryOpen, setSecondaryOpen] = useState(false);
    //console.log(time);
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
        console.log(filhos)
    }
    //-------------------------------------------------------------------------------------------

    const toggleSecondary = () => {
      setSecondaryOpen(!isSecondaryOpen);}

      const handleButtonClick = () => {
        // Call both functions
        //console.log(time);
        getFilhos(time);
        toggleSecondary();
        //console.log(time.id)
      };
    //-------------------------------------------------------------------------------------------


    return (
        <Fragment>

   
<div className="container mt-3">
  
<button type="button" className="btn btn-primary text-center align-middle"
onClick={() => handleButtonClick()}>
    {time}
  </button>
</div>



{isSecondaryOpen && <MatesCards time={time.id}/>}
          </Fragment>

        );
      };



export default ViewStructure;
