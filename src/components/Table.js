import React from "react";
import BotonComponent from "./Boton";
import DropdownComponent from "./Dropdown";

const TableComponent= ({usuarios, deleteUser, setUsuarioEditado}) => {
    return (
        <div class="container border">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
                    {usuarios.map(usuario=>(
                        <tr>
                          <td>
                            {usuario.rut}
                        </td>
                        <td>
                            {usuario.nombre}
                        </td>
                        <td>
                            {usuario.apellido}
                        </td>
                        <td>
                            {usuario.correo}
                        </td>
                        <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => {
                    deleteUser(usuario.apellido);
                  }}
                >
                 Eliminar
                </button>
                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={() => {
                    setUsuarioEditado(usuario)
                  }}
                >
                 Editar
                </button>
                    </tr>
                    ))}
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>correo@correo.gmail.com</td>
           

          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>correo@gmail.com</td>
            <td><DropdownComponent/></td>
          </tr>
        </tbody>
      </table>
      </div>
    );
    };
    export default TableComponent;