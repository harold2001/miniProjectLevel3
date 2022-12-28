import { Fragment } from "react";
import "../stylesheets/Home.css"

function Home() {
   return (
      <div className="d-flex justify-content-center align-items-center" id="mainContainer">
         <div className="col-7 text-center p-5" id="container">
            <h1 id="title" className="mb-4">MINOTAPP</h1>
            <p id="text">Una aplicación que facilitará tu vida al poder anotar tareas pendientes o recordatorio. También podrás hacer tus cálculos matemáticos a través de una calculadora y podrás estar al tanto del clima.</p>
         </div>
      </div>
   );
}

export default Home;