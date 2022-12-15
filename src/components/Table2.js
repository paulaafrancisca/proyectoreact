import React from "react";
import DropdownComponent from "./Dropdown";

const Table2Component= ({autos,deleteAuto}) => {
    return (
        <div class="container">
      <table class="table">
        
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Marca</th>
            <th scope="col">Modelo</th>
            <th scope="col">Color</th>
            <th scope="col">Año</th>
            <th scope="col">Valor</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
        {autos.map(auto=>(
          <tr>
          <td>
            {auto.id}
            </td>
                        <td>
                            {auto.marca}
                        </td>
                        <td>
                            {auto.modelo}
                        </td>
                        <td>
                            {auto.color}
                        </td>
                        <td>
                            {auto.anio}
                        </td>
                        <td>
                            {auto.valor}
                        </td>
                        <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => {
                    deleteAuto(auto.modelo);
                  }}
                >
                 Eliminar
                </button>
                </tr>
                  ))}


          <tr>
          
            <th scope="row">1</th>
            <td>Nisan</td>
            <td>Sentra</td>
            <td>Rojo</td>
            <td>2021</td>
            <td>17.490.000</td>
            <td><DropdownComponent/></td>
          </tr>
        </tbody>
      </table>
      </div>
    );
    };
    export default Table2Component;