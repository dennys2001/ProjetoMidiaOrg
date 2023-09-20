import React, { Fragment, useRef, useEffect } from "react";




const MatesCards = ({ time }) => {
    const myComponentRef = useRef(null);  

//console.log(time)


    useEffect(() => {
        if (myComponentRef.current) {
          myComponentRef.current.focus();
        }
      }, []);

    return (
    <Fragment>
        <div tabIndex={-1} ref={myComponentRef}>
             {/* Your component content */}
    
            <div className="container p-5 my-5 bg-dark text-white">
            <h1>Know Our Team</h1>
            <p>Agora só faltam as fotos do {time} </p>
            
            </div>
            
        </div> 

    </Fragment>
);
};

export default MatesCards;