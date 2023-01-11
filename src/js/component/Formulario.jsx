import React, { useEffect } from "react";
import { useState } from "react";
import List from "/workspace/To-Do-FETCH/src/js/component/List.jsx"
import { FetchList } from "./FetchList.jsx";



const Formulario = () => {

    const [inputCreado, setInputCreado] = useState("");
	const [tarea, setTarea] = useState([]);


    useEffect(() => {
        FetchList().then(body => setTarea(body))
    },[])

    
    useEffect(()=>{
   
        fetch('https://assets.breatheco.de/apis/fake/todos/user/lucia-tacchetti', {
            method: "PUT",
            body: JSON.stringify(tarea),
            headers: {
            "Content-Type": "application/json"
            }
        })
        .then(resp => {
            return resp.json(); 
        })
        .then(body => {
            console.log(body);
        })
        .catch(error => {
            console.log(error);
        });

    },[tarea])
    

	const añadirTarea = (e) => {setInputCreado({[e.target.name]: e.target.value, done:false});}

	const crearArray = (e) =>{
		if(e.key === 'Enter') {
            
			setTarea([...tarea, inputCreado])
            setInputCreado("")
		}
	}




    const borrarTarea= (index) => { 
        const borradoArray= [...tarea]
        borradoArray.splice(index,1)

            if(borradoArray.length===0) {
                borradoArray.splice(0,borradoArray.length)
                setTarea([{label:"...",done:false}])         
            }else{
                setTarea(borradoArray)
            } 
    }


    

    return (
        
        <div>

            <input className="container-fluid m-2 p-1 border" name="label" style={{width:"290px"}} type="text" onChange={añadirTarea}  onKeyPress={crearArray} />

            <div>
                {
				tarea.map((tarea,index) => <List borrarTarea={borrarTarea} tarea={tarea.label} key={index}/> )
				}
            </div>

        </div>

    )
}

export default Formulario;