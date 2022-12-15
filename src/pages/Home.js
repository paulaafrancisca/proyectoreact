import React, {useCallback} from "react";
import { useNavigate } from "react-router-dom";
import {BotonComponent,FormularioUserComponent} from '../components';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';



const HomePage = ()=> {
    const navigate = useNavigate();
    const handleOnClick = useCallback(()=> navigate("/Auto", {}, [navigate]));
    const handleOnClickTabla= useCallback(()=> navigate("/TablaUsuario", {}, [navigate]));
    const GreenSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
          color: pink[600],
          '&:hover': {
            backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
          },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
          backgroundColor: pink[600],
        },
      }));
      const label = { inputProps: { 'aria-label': 'Color switch demo' } };
    return(

        
        
        <div class="container border border-danger ">
            <div class="p-3 mb-2 bg-success text-center">
            <div class="row">
            <div class="col">
            <FormularioUserComponent/>
            <br></br>
            <BotonComponent infoButton={"ir a Tabla Usuarios"} handleOnClick={handleOnClickTabla}/>
            <br></br>
            <BotonComponent infoButton={"ir a Auto"} handleOnClick={handleOnClick}/>
            </div>
            </div>
            <div>
      <Switch {...label} defaultChecked />
      <Switch {...label} defaultChecked color="secondary" />
      <Switch {...label} defaultChecked color="warning" />
      <Switch {...label} defaultChecked color="default" />
      <GreenSwitch {...label} defaultChecked />
    </div>
            <br></br>
            </div>
            </div>
    
    );
};
export default HomePage;