import React from "react";

const FormularioAutoComponent = () => {
    return (
      
            <form action="/action_page.php">
             <div class="container">
              <div class="form-group">
                <h2>Datos Auto </h2>
                <label for="marca">Marca:</label>
                <input type="marca" class="form-control" id="marca"></input>
              </div>
              <div class="form-group">
                <label for="modelo">Modelo:</label>
                <input type="modelo" class="form-control" id="modelo"></input>
              </div>
              <div class="form-group">
                <label for="color">Color:</label>
                <input type="color" class="form-control" id="color"></input>
              </div>
              <div class="form-group">
                <label for="anio">Año:</label>
                <input type="anio" class="form-control" id="anio"></input>
              </div>
              <div class="form-group">
                <label for="valor">Valor:</label>
                <input type="valor" class="form-control" id="valor"></input>
              </div>
              </div>
             
            </form>
    );
};
export default FormularioAutoComponent;