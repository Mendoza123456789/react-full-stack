import '../styles/Header.css';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.svg'

export default function Header(props) {

    const navigate = useNavigate()

    return (

        <div className='box-header'>

            <nav className="navbar navbar-expand-lg bg-light" id='navbar-header'>
                <div className="container-fluid">
                
                        {props.pseudonimo}
                        <button type="button" className="btn" onClick={ () => navigate('/')}> Angel Mendoza / React </button>
                        <img src={logo} className="App-logo" alt="logo" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">

                                    <button type="button" className="btn btn-light" onClick={ () => navigate('/')}>Home</button>

                                </li>  
                            </ul>

                            <div className='box-link d-flex'>
        
                                <div className='box-a-link'>

                                <button type="button" className="btn btn-light" onClick={ () => navigate('/privada')}>Privada</button>

                                </div>

                                <div className='box-a-link'>

                                    <button type="button" className="btn btn-light" onClick={ () => navigate('/registro')}>Registro</button>

                                </div>

                                <div className='box-a-link'>

                                    <button type="button" className="btn btn-light" onClick={ () => navigate('/login')} >Login</button>
                                
                                </div>

                            </div>

                        </div>
                </div>
            </nav>

        </div> 
    );
  }
  
  