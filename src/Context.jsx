import { useState } from "react";
import MyContext from "./Create";

function State(props){
    const [id,setId] = useState("qD6Q2iPidYQ");
    return(
        <MyContext.Provider value={{id,setId}}>
            {props.children}
        </MyContext.Provider>
    )
}
export default State;