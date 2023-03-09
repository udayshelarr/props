import React from "react";

const Function2 =(props)=>{
    return(
        <>
        <h1>passing value to props</h1>
        <h1>name : {props.name} num : {props.num}boolean : {props.Boolean}nul :{props.nul}</h1>
        <img src={props.data} alt="Ita image"/>
        </>
    )
}
export default Function2