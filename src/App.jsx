import './App.css';
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Fragment } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Calculadora from "./pages/Calculadora";
import Calendario from "./pages/Calendario";
import Home from "./pages/Home";
import Notas from "./pages/Notas";
import Tareas from "./pages/TodoList";
import { AiTwotoneHome, AiFillCalculator } from "react-icons/ai";
import { GrNotes } from "react-icons/gr";
import { GoTasklist } from "react-icons/go";
import { MdTask } from "react-icons/md";
import { BsFillCalendarDayFill } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { GiNotebook } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      {/* <Fragment> */}
        <BrowserRouter>
          <nav className="navbar navbar-expand-lg" >
            <div className="container-fluid">
              <ul className="navbar-nav gap-2">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/miniProjectLevel3"><AiTwotoneHome /> Inicio</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/calculadora"><AiFillCalculator /> Calculadora</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/notas"><GiNotebook /> Notas</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/tareas"><FaTasks /> Tareas</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/calendario"><BsFillCalendarDayFill /> Calendario</NavLink>
                </li>
              </ul>
            </div>
          </nav>

          <Routes>
            <Route exact path="miniProjectLevel3" element={<Home />} />
            <Route path="calculadora" element={<Calculadora />} />
            <Route path="notas" element={<Notas />} />
            <Route path="tareas" element={<Tareas />} />
            <Route path="calendario" element={<Calendario />} />
          </Routes>
        </BrowserRouter>
      {/* </Fragment> */}
    </div>
  );
}

export default App;
