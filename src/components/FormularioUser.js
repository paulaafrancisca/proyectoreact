import React, { useState, useEffect } from "react";
import BotonComponent from "./Boton";
const initialUsuario ={
  nombre:"",
  apellido:"",
  correo:""
}


const FormularioUserComponent = ({userAdd, usuarioEditado, setUsuarioEditado, userEdit}) => {
  const [usuario,setUsuario]= useState(initialUsuario);
  const {nombre, apellido, correo} = usuario;

  useEffect(()=>{
    if(usuarioEditado!== null){
        setUsuario(usuarioEditado)
    }else{
        setUsuario(
            {
                nombre: "",
                apellido: "",
                correo: "",
                rut: "",
              }
        )
    }
  },[usuarioEditado]);



  const handleInputChange =(e)=>{
    const changedFormValue = {
      ...usuario,
      [e.target.name]:e.target.value
    }
    setUsuario(changedFormValue);
  }

    return (
      <form action="/action_page.php">
        
        <div class="container">
        <div class="form-group">
        {usuarioEditado!==null ? <h1>Editar Usuario</h1>:<h1>Ingrese Usuario</h1>}
          <label for="name">Name:</label>
          <input 
          class="form-control"
          placeholder="Nombre"
          type="text"
           id="nombre"
           name= "nombre"
           value={nombre}
           onChange={handleInputChange}/>
        </div>
        <div class="form-group">
          <label for="lastName">Last Name:</label>
          <input 
          class="form-control"
          placeholder="Apellido"
          type="text"
           id="lastName"
           name= "apellido"
           value={apellido}
           onChange={handleInputChange}/>
        </div>
        <div class="form-group">
          <label for="email">Email address:</label>
          <input 
             class="form-control"
             placeholder="correo@correo.com"
             type="text"
              id="correo"
              name= "correo"
              value={correo}
              onChange={handleInputChange}/>
        </div>
        {usuarioEditado !== null ? (
          <button
            type="button"
            class="btn btn-success"
            onClick={() => userEdit(usuario)}
          >
            Editar usuario
          </button>
        ) : (
          <button
            type="button"
            class="btn btn-success"
            onClick={() => userAdd(usuario)}
          >
            Ingresar usuario
          </button>
        )}
       {usuarioEditado !== null ? (
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => setUsuarioEditado(null)}
          >
            Cancelar
          </button>
        ) : (
          <></>
        )}

        </div>
      </form>
    );
};
export default FormularioUserComponent;