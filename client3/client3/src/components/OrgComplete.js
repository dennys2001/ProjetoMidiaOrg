import React, { Fragment, useState }  from "react";
//import ViewStructure from "./ViewStructure";
import NoImage from "./img/no-image-available-md.png"
import MatesCards from "./MatesCards"




const OrgComplete = () => {
    const [idDiretor, setIdDiretor] = useState(); 
    const [diretoria, setDiretoria] = useState([]);
    const [isSecondaryOpen, setSecondaryOpen] = useState(false);
   // const alternativeText = {NoImage};
    const imageStyle = {
        width: '150px', // Adjust the width as needed
        height: '150px', // Adjust the height as needed
        borderRadius: '50%', // To make it perfectly circular
        // You can add other CSS styles here if necessary
      };

        const getDiretoria = async () => {
            try {

                const response = await fetch("http://localhost:5000/allemployees/diretores/todos")
                const jsonData = await response.json()
                
                setDiretoria(jsonData);
                
            } catch (err) {
                console.error(err.message)
                
            }
            
        };
 
        useState((diretoria) => {
            getDiretoria();
        }, []);

//-------------------------------------------------função busca os filhos------       

console.log(diretoria);
        
//-------------------------------------------------downward------
const toggleSecondary = () => {
    setSecondaryOpen(!isSecondaryOpen);}

    const handleButtonClick = (diretor) => { 
      // Call both functions
      setIdDiretor(diretor)
      //getFilhos(idDiretor);
        //console.log(diretor);
      toggleSecondary();
     
       // console.log(handleButtonClick)
    };


//-------------------------------------------------downward------

        return (
            <Fragment>
        
                <div className="container p-5 my-5 bg-dark text-white">
                    <h1>Know Our Team</h1>
                    <p>Agora só faltam as fotos</p>
                    
                    <div className="row">
                     {diretoria.map((diretor) =>  ( 
                        
                        <div className="col-sm-3 p-3 bg-white text-black" key={diretor.id}  >
                           <div className="d-flex justify-content-center">
                              <div className="card align-center bg-light text-dark d-flex justify-content-center align-items-center">
                                
                                    {diretor.image !== null ? (
                                    <img className="card-img-top rounded-circle border" style={imageStyle}
                                        src={`data:image/jpeg;base64,${diretor.image}`} 
                                       alt={NoImage.buffer}  
                                        />
                                            ) : (
                                            <p>available</p>
                                            )}
                                    <div className="card-body">
                                        <h4 className="card-title">{diretor.nome}</h4>
                                        <p className="card-text">{diretor.cargo}</p>
                                        <button type="button" className="btn btn-primary text-center align-middle"
                                        onClick={() => handleButtonClick(diretor)}>
                                            
                                        {diretor.nome}
                                        </button>     
                                    </div>
                            </div>
                        </div>
                    </div>
                    ))}
                   </div>
                   
                </div>
                
                {isSecondaryOpen && <MatesCards diretor={idDiretor} />}                    
            </Fragment>
            
        );

               
        };
export default OrgComplete;