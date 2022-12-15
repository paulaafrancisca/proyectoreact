import React, {useCallback, useState} from "react";
import { useNavigate } from "react-router-dom";
import { TableComponent,BotonComponent, FormularioUserComponent } from "../components";

const usuario1= [
    {
    nombre:'Joseph',
    apellido:'Joestar',
    correo:'jo.jo@gmail.com',
   
  },
  {
   
    nombre:'Josuke',
    apellido:'Higashikata',
    correo:'jojo@gmail.com',
  
  },
  ];

const TablaUsuarioPage = ()=> {
    const navigate = useNavigate();
    const handleOnClick = useCallback(()=> navigate("/", {}, [navigate]));
   
    const [user, setUser] =useState(usuario1);

    const [usuarioEditado, setUsuarioEditado] =  useState(null);


    const userDelete =(apellidoUsuario)=>{
        const changeUser = user.filter(usuario => usuario.apellido != apellidoUsuario);
        setUser(changeUser);
    }

    const userAdd =(usuario)=>{
      const addUsuario=[
        ...user,usuario
      ]
    
    setUser(addUsuario);
    };

    const userEdit =(usuarioEditado)=>{
      const editUser = user.map(usuario => (usuario.apellido === usuarioEditado.apellido ? usuarioEditado : usuario))
      
      setUser(editUser);
    };

    return(


           <div class= "container border">
                <div class="row">
                    <div class="col">
            <TableComponent usuarios={user} deleteUser= {userDelete} setUsuarioEditado={setUsuarioEditado}/>
            <br></br>
            <BotonComponent infoButton={"ir a Home"} handleOnClick={handleOnClick}/>
              <br></br>
              <FormularioUserComponent
            userAdd={userAdd}
            usuarioEditado={usuarioEditado}
            setUsuarioEditado={setUsuarioEditado}
            userEdit={userEdit}
          /> 
            </div>
            </div>
            </div>

)
}
export default TablaUsuarioPage;