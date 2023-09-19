import React, { useState, useEffect, Fragment } from 'react';

const InputNew = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  
  const [imageFile, setImageFile] = useState(null);
  const [leaderId, setidLeader] = useState("");
  const [lideres, setListLider] = useState("");
  const [cargo, setCargo] = useState("");
  const [listCargos, setListCargos] = useState("");



  //--------------- Busca os Lideres para preencher o campo de lider-----------------------

  const getListLider = async () => {
    try {
      const response = await fetch("http://localhost:5000/allemployees/nomes/todos")
      const jsonData = await response.json()

      setListLider(jsonData);
      
    } catch (err) {
      console.error(err.message)
      
    }      
    
};

useEffect(() => {
  getListLider();
}, []);
//---------------------------------------------------------------------------------
    //==================Inserindo auto-complete no Cargo====================//    

    const getListCargos = async () => {
        try {
          const response = await fetch("http://localhost:5000/allemployees/cargos/todos")
          const jsonData = await response.json()

          setListCargos(jsonData);
          
        } catch (err) {
          console.error(err.message)
          
        }      
        
        };

        useEffect(() => {
            getListCargos();
        }, []);


     //==================Inserindo auto-complete no Cargo====================// 


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object
    const formDataToSend = new FormData();

    // Append other form data to formDataToSend
    //formDataToSend.append('name', formData.name);
    //formDataToSend.append('email', formData.email);
    formDataToSend.append('nome', formData.nome);
    formDataToSend.append('estrutura', formData.estrutura);
    formDataToSend.append('level', formData.level);
    formDataToSend.append('lider', formData.lider);
    formDataToSend.append('cargo', formData.cargo);
    formDataToSend.append('marcas', formData.marcas);
    // Append the image file to formDataToSend
    formDataToSend.append('image', imageFile);



    // Send formDataToSend to the server using an HTTP POST request (e.g., Axios or fetch).
    try {
      const response = await fetch('http://localhost:5000/create', {
        method: 'POST',
        body: formDataToSend,
      });

      // Handle the response from the server
      // (e.g., show a success message or handle errors).
      window.location = "/";
    } catch (error) {
      // Handle any errors that occurred during the fetch.
    }
  };

  return (
    <Fragment>
        <h1 className="text-center mt-5">Org Chart Admin</h1>
    
    <form className="form-inline mt-5" onSubmit={handleSubmit}>
      
      <input 
        type="text"
        name="nome"
        className="form-control"
        placeholder="Digite o Nome"
        value={formData.nome}
        onChange={handleInputChange}
      />


    {/*--  <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
  --*/}
      <input 
        type="text" 
        name="estrutura"
        className="form-control ml-2"
        placeholder="Insira a Estrutura"
        value={formData.estrutura}
        onChange={handleInputChange}
    />
    <select 
        type="text" 
        className="form-control ml-2"
        name="level"
        value={formData.level}
        onChange={handleInputChange}>
            <option>Selecione o Level</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
    </select>
    <select 
        type="text" 
        className="form-control ml-2"
        name="lider"
        value={formData.lider}
        onChange={handleInputChange}
    >
            <option defaultValue>Selecione o Líder:</option>
                { lideres && lideres.map(lider => ( 
                <option key={lider.id} value = {lider.id}>{lider.nome}</option>

                ) )} 
    </select>
    <input className="form-control ml-2" 
        list="datalistOptions" 
        name="cargo"
        placeholder="Digite para buscar..."
        value={formData.cargo}
        onChange={handleInputChange}/>
    <datalist id="datalistOptions">
    { listCargos && listCargos.map(lCargo => ( 
        <option key={lCargo.cargo} value = {lCargo.cargo}>{lCargo.cargo}</option>

        ) )}
    </datalist>
                
{/*-----------------Inserido Campo Cargo Dinamico no Form---------------------*/}
    <input 
        type="text" 
        className="form-control mt-3"
        name="marcas"
        placeholder="Insira a(s) marca(s) Separadas por ' ; ' "
        data-bs-toggle="tooltip" title="Separe as marcas por ' ; ' "
        value={formData.marcas}
        onChange={handleInputChange}
    />
    
    <input className="mt-3 ml-5" type="file" accept="image/*" onChange={handleImageChange} />
    <p></p><button className="btn btn-primary mt-3 ml-5" type="submit">Submit</button>
    </form>
    </Fragment>
    );

};

export default InputNew;

