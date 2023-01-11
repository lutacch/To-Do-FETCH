import React from "react";

 
const Lista =(props) => {

    return (

        <div className="list-group container p-1" style={{width:"290px"}}>
            <a href="#" className="list-group-item list-group-item-action" key={props.index}>{props.tarea}<button className="btn btn-danger" onClick={()=>props.borrarTarea(props.index)}>X</button></a>
        </div>  
    )
}

export default Lista;