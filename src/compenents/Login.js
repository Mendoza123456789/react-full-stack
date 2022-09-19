import '../styles/Login.css';
import { useState } from 'react';
import axios  from 'axios';
//import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { useNavigate } from 'react-router-dom';


//const URL = 'http://localhost:8080/query/login'
const URL = 'https://am-react-back.herokuapp.com/query/login'


export default function Login() {


    const navigate = useNavigate()
    const [error, setError] = useState(false)
    const [body, setBody] = useState ({ pseudonimo: '', contrasena: ''})

    // ESTADO PARA ICONO DE HAND
    const [iconHand, setIconHand] = useState(false)

    const inputChange = (e) => {

        let { name, value } = e.target
        let newBody = {...body, [name]: value}
        setBody(newBody)

    }

    const handleSubmit = async(e) =>{

        e.preventDefault()
        if(!e.target.checkValidity())
        {

            console.log("Faltan Parámetros y/o valores en el formularios")

        }
        else
        {

            let res = await axios.post(URL, body)
            if(res.data === body.pseudonimo.toUpperCase())
            {
                
                //setHecho('true')
                //setPseudonimo(res.data)
                localStorage.setItem('pseudonimo', body.pseudonimo)
                console.log("Acceso concedido para: ", res.data)
                navigate('/privada')

            }
            else
            {

                setError(true)
                console.log("Acceso denegado")
                console.log("Pseudonimo y/o contraseña inválidos")

            }

        }

    } 

    function handOpen()
    {

        setIconHand(true)

    }

    function handClose()
    {

        setIconHand(false)

    }
    
    return (
        
        <div>

            <Header/>

            <div className="login">
            
            <form className='box-form' id='form-login' onSubmit={handleSubmit}>

                <div className='mb-3'>

                    <p className='p-mb'>

                        Inicio de sesión

                    </p>

                </div>

                { error ? <p className='p-error'> Pseudonimo y/o contraseña inválidos </p> : '' }

                <div className="mb-3">
                
                    <label htmlFor="exampleInputEmail1" className="form-label"> Pseudonimo </label>

                    <div className='box d-flex'>

                        <div className='box-fa-solid'>

                        <i className="fa-sharp fa-solid fa-user"></i>

                        </div>
                        
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Ejemplo123' required
                        value={body.pseudonimo} onChange={inputChange} name='pseudonimo' />        

                    </div>

                </div>

                <div className="mb-3 d-flex">
                    
                    <div className='box-mb'>
                
                        <label htmlFor="exampleInputPassword1" className="form-label-City">Contraseña</label>
                        
                        <div className='box2 d-flex'>
                
                        <div className='box-fa-solid'>
                
                            <i className="fa-solid fa-key"></i>
                
                        </div>
                
                        <input type="password" className="form-control" id="exampleInputPassword1" aria-describedby="emailHelp" required
                        value={body.contrasena} onChange={inputChange} name='contrasena'/>  
                        
                        </div>

                    </div>
                
                </div>

                <div id="emailHelp" className="form-text"> <strong> Esta información no comprate con terceros! </strong> </div>
                <button type="submit" className="btn btn-primary">Continuar</button>

            </form>

            <div className='box-link-button'>

                <p className='p-link-button'> 

                    <button type="button" className="btn btn"> <p className='p-register' onClick={ () => navigate('/registro')}> Regístrate </p> </button>

                </p> 

            </div>

            </div>

            <div className='box-card-user'>

                <p className='p-button-user'>

                    { !iconHand ? 
                    
                        <button className="btn btn-secondary" onClick={handOpen} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Usuario de prueba
                        </button>
                    : 
                        
                        <button className="btn btn-secondary" onClick={handClose} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Usuario de prueba
                        </button>

                    }

                </p>

                <div className="collapse" id="collapseExample">

                    <p className='p-user'>
                        <button className="btn btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            <p className='p-usuario-prueba'>
                                Pseudonimo: Angel
                            </p> 
                            <p className='p-usuario-prueba'>
                                Contraseña: 123456
                            </p>
                        </button>
                    </p>

                </div>

                <p className='p-user-icon-hand'>

                    { !iconHand ? <i className="fa-solid fa-hand-point-up"> </i> : <i className="fa-solid fa-circle-user"> </i> }
                    
                </p>

            </div>

        </div>

    );
  }
  