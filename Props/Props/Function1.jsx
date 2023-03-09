import React from "react";
import Function2 from "./Function2";
import i from '../img/Shiva.jpg';

const Function1 =()=>{
    return(
        <>
        <Function2 name="uday" num={12334} boolean={true} nul={null}/>
        <Function2 data={i}/>
        </>
    )
}
export default Function1