import React from "react";
import Formulario from "./Formulario.jsx";

const Home = () => {

	return (
		
		<div className="container-flex " >

			<div className="position-absolute top-50 start-50 translate-middle rounded m-5 p-5  text-center bg-dark" style={{width:"500px"}}>

				<h1 className="text-white">To Do List:</h1>

				<Formulario />
			
			</div>
		</div>
	);
};

export default Home;
