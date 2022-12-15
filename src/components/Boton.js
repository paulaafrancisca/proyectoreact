import React from "react";

const BotonComponent = ({infoButton, handleOnClick}) => {
    return (
        <div>
        <button type="button"
         class="btn btn-success"
         onClick={()=>{
            handleOnClick();
         }}
         >{infoButton}</button>
         </div>
    );
};
export default BotonComponent;