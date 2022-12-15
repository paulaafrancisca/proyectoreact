import React, {useCallback, useState} from "react";
import { useNavigate } from "react-router-dom";
import {BotonComponent,Table2Component } from "../components";

const auto1=[
    {   id:'2',
        marca:'Nisan',
        modelo:'Sentra',
        color:'azul',
        anio:'2021',
        valor: '16.000.000'
    }
];

const TablaAutoPage = ()=> {
    const navigate = useNavigate();
    const handleOnClick = useCallback(()=> navigate("/Auto", {}, [navigate]));
    
    const [auto, setAuto] =useState(auto1);


    const autoDelete =(modeloAuto)=>{
        const changeAuto = auto.filter(auto => auto.modelo != modeloAuto);
        setAuto(changeAuto)
    }
    return(
        <div class="container border border-danger">

        <div class="col">
        <Table2Component autos={auto} deleteAuto={autoDelete}/>
        <br></br>
        <BotonComponent infoButton={"ir a Auto"} handleOnClick={handleOnClick}/>
        </div>
        </div>
        );
    };

    export  default TablaAutoPage;