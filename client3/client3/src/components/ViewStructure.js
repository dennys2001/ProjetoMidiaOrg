import React, { Fragment, useState } from "react";
import BadgeList from "./BadgeList";
import MatesCards from "./MatesCards";


const ViewStructure = ({ time }) => {

    //const [id] = useState(time.id);
    const [filhos, setFilhos] = useState();
    //const [itemList] = useState([filhos.marcas]);
    const [isSecondaryOpen, setSecondaryOpen] = useState(false);
    
    //------------------------------------------------------------------------------------------
    const getFilhos = async () => {
      try {
                const response = await fetch(`http://localhost:5000/allemployees/subestrutura/${time.id}`)
                const jsonData = await response.json()
                
                setFilhos(jsonData);
                
               
                
            } catch (err) {
                console.error(err.message)
      }

    } 
    useState((filhos) => {
      getFilhos();
  }, []);
    console.log(filhos)
    //-------------------------------------------------------------------------------------------
 

    const toggleSecondary = () => {
      setSecondaryOpen(!isSecondaryOpen);}

      const handleButtonClick = () => {
        // Call both functions
        //console.log(time);
       // getFilhos(time.id);
        toggleSecondary();
        
  
      };
    //-------------------------------------------------------------------------------------------
  

    return (
        <Fragment>

   
<div className="container mt-3">
  
<button type="button" className="btn btn-primary text-center align-middle"
onClick={() => handleButtonClick(time.id)}>
    {time.nome}
  </button>
</div>
{isSecondaryOpen && <MatesCards filhos={filhos} />}



          </Fragment>

        );
      };



export default ViewStructure;
