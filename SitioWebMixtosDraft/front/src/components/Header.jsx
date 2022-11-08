import React from 'react'
import "../styles/global.css";
import logo from '../images/logoicono.png'
import { NavLink } from 'react-router-dom'
import lcarrito from "../images/logocarrito.png";

export const Header = () => {
    return (
        <>
            <header style={{ color: "white" }}>
                <nav className="navbar navbar-expand-lg navbar-light bg-primarys">
                    <NavLink to="/menu">
                        <img src={logo} height="80" alt="No Encontrada" />
                    </NavLink>

                    <h1>MIXTOS Restaurante</h1>

                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <h4><NavLink to="/menu" className="nav-item nav-link text-center" style={{ color: "white" }}>Menú</NavLink></h4>
                            <h4><NavLink to="/ubicacion" className="nav-item nav-link text-center" style={{ color: "white" }}>Ubicación</NavLink></h4>
                            <h4><NavLink to="/horarios" className="nav-item nav-link text-center" style={{ color: "white" }}>Horarios</NavLink></h4>
                            <h4><NavLink to="/iniciarsesion" className="nav-item nav-link text-right" style={{ color: "white" }}>INICIAR SESIÓN</NavLink></h4>
                            
                            <div className="col-12 col-md-1 mt-1 mt-md-1 text-center">
                                <a href="">
                                    <img src={lcarrito} alt="" height="40
                                    px" />
                                    <span class="position-absolute top-2 start-250 translate-middle badge rounded-pill bg-danger">
                                        7+
                                    {/* <span class="visually-hidden">mensajes no leídos</span> */}
                                    </span>
                                </a>
                            </div>
                           
                        </div>
                    </div>

                </nav>
            </header>
        </>
    )
}
