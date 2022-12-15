import React from "react";

const DropdownComponent = () => {
    return (
        <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Actions
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item">Guardar</a></li>
    <li><a class="dropdown-item">Editar</a></li>
    <li><a class="dropdown-item">Eliminar</a></li>
  </ul>
</div>
    );
};
export default DropdownComponent;