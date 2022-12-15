import React, {useCallback} from "react";
import { useNavigate } from "react-router-dom";

import {BotonComponent, FormularioAutoComponent} from '../components';

const AutoPage = ()=> {
    const navigate = useNavigate();
    const handleOnClick = useCallback(()=> navigate("/", {}, [navigate]));
    const handleOnClickTablaAuto = useCallback(()=> navigate("/TablaAuto", {}, [navigate]));
    return(
        <div class="container border border-danger">
            <div class="p-3 mb-2 bg-light text-center">
        <div>
        <div class="col">
        <FormularioAutoComponent/>
        <br></br>
        <BotonComponent infoButton={"ir a Tabla Autos"} handleOnClick={handleOnClickTablaAuto}/>
        <br></br>
        <BotonComponent infoButton={"ir a Usuario"} handleOnClick={handleOnClick}/>
        
        </div>
        <br></br>
        </div>
         </div>
         </div>
    );
};
export default AutoPage;