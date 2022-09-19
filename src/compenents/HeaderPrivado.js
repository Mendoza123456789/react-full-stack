import '../styles/Header.css';
import { useNavigate } from 'react-router-dom';
//import { useState } from 'react';
import logo from '../images/logo.svg'

export default function HeaderPrivado(props) {

    const navigate = useNavigate()

    function cerrarSesion(){

        localStorage.removeItem('pseudonimo')
        navigate('/')

    }

    return (

        <div className='box-header'>

            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                
                        <button type="button" className="btn" onClick={ () => navigate('/privada')}> AMendoza|React </button>
                        <img src={logo} className="App-logo" alt="logo" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">

                                    <button type="button" className="btn btn-light" onClick={ () => navigate('/privada')}>Home/User</button>

                                </li>  
                            </ul>

                            <div className='box-link d-flex'>
        
                                <div className='box-a-link'>

                                <button type="button" className="btn btn-light" onClick={cerrarSesion}>Cerrar sesión</button>

                                </div>

                            </div>

                        </div>
                </div>
            </nav>
      
        </div> 
    );
  }
  
  