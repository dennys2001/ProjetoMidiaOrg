import React, { Fragment, useState } from "react";

const Select = () => {
    const [selectValue, setSelectValue] = useState("");
    const onChange = (event) => {
      const value = event.target.value;
      setSelectValue(value);

      console.log(selectValue); 
    };
    return ( <Fragment>
        <div>
      <select className="form-control mt-3" onChange={onChange} >
        <option defaultValue enabled>
          Select Team
        </option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
      </select>
      {selectValue && <h2 className="mt-3">{selectValue}</h2>}
    </div>
           </Fragment>
           
    );
    
};
   



export default Select;

