import '../styles/Registro.css';
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import Header from './Header';


//const URL = 'http://localhost:8080/query'
const URL = 'https://am-react-back.herokuapp.com/query'

const Registro = () =>{

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [pseudonimo, setPseudonimo] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    // ESTADOS PARA LOS ERORES 
    const [errorPassword1, setErrorPassword1] = useState(false)
    const [errorPassword2, setErrorPassword2] = useState(false)
    const [ok, setOk] = useState(false)

    // ESTADO DE HECHO
    const [hecho, setHecho] = useState(false)
    const [user, setUser] = useState('')

    const crear = async (e) => {

        e.preventDefault()

        if( password1.length < 6 )
        {

                setOk(false)
                console.log("Mínimo 6 caracteres.")
                console.log("Longitud: ",{password1: password1.length})
                setErrorPassword1(true)

        }

        else
        {

            setErrorPassword1(false)
            setOk(true)

        }

        if(password1 !== password2)
        {

            console.log("No coinciden.")
            setErrorPassword2(true)

        }

        else
        {

            await axios.post(URL, {

                email: email,
                telefono: telefono,
                pseudonimo: pseudonimo,
                password1: password1,
                password2: password2
    
            })

            setHecho(true)
            setUser(pseudonimo)

            //navigate('/login')

        }

    }

    function registroNuevo()
    {

        setHecho(false)
        navigate('/registro')

    }

    return(

        <div>

        <Header/>
            
        { hecho ? 
        
            <div className="alert alert" role="alert">

            <p className='p-alert'>

                Hola, {user.toUpperCase()} 
            
            </p>

            <p className='p-alert2'>

                Gracias por registrate

            </p>

            <p className='p-alert-icon'>

                <i className="fa-solid fa-hand-peace"></i>

            </p>

            <div className='box-button-login'>

            <p className='p-alert-button'>

                <button type="button" className="btn btn-primary" onClick={ () => navigate('/login')}>Iniciar sesión</button>

            </p>

            <p className='p-alert-button'>

                <button type="button" className="btn btn" onClick={registroNuevo}>Volver</button>

            </p>

            </div>

            </div>
        
        :
            
            <div className="Form">

                <form className='box-form' onSubmit={crear}>

                <div className='mb-3'>

                    <p className='p-mb'>

                    Registro Personal

                    </p>

                </div>

                <div className="mb-3">
                    
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>

                    <div className='box d-flex'>

                    <div className='box-fa-solid'>

                        <i className="fa-sharp fa-solid fa-envelope"></i>

                    </div>
                    
                    <input type="email" className="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp" placeholder='Ejemplo@gmail.com' required
                    value={email} onChange={ (e) => setEmail(e.target.value)}/>        

                    </div>

                </div>

                <div className="mb-3">

                    <label htmlFor="exampleInputTelefono" className="form-label">Teléfono</label>

                    <div className='box d-flex'>

                    <div className='box-fa-solid'>

                        <i className="fa-solid fa-phone"></i>

                    </div>
                    
                    <input type="text" className="form-control" id="exampleInputTelefono" name="telefono" aria-describedby="telefonoHelp"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Ejemplo: 111-222-3333" required
                    value={telefono} onChange={ (e) => setTelefono(e.target.value)}/>        

                    </div>

                </div>

                <div className="mb-3">

                    <label htmlFor="exampleInputTelefono" className="form-label">Pseudonimo</label>

                    <div className='box d-flex'>

                    <div className='box-fa-solid'>

                        <i className="fa-sharp fa-solid fa-user"></i>

                    </div>

                    <input type="text" className="form-control" id="exampleInputPseudonimo" name="telefono" aria-describedby="telefonoPseudonimo" placeholder="Ejemplo123" required
                    value={pseudonimo} onChange={ (e) => setPseudonimo(e.target.value)}/>        

                    </div>

                </div>

                <div className="mb-3 d-flex">
                        
                        <div className='box-mb'>
                    
                        <label htmlFor="exampleInputPassword1" className="form-label-City">Contraseña</label>
                        
                        <div className='box2 d-flex'>
                    
                            <div className='box-fa-solid'>
                    
                            <i className="fa-solid fa-key"></i>
                    
                            </div>
                    
                            <input type="password" className="form-control" id="exampleInputPassword1" name='password1' aria-describedby="password1Help" required
                            value={password1} onChange={ (e) => setPassword1(e.target.value)}/>        
                        
                        </div>

                        { errorPassword1 ? <p className='p-error'> Mínimo 6 caracteres </p> : '' }
                        { ok ? <p className='p-ok-icon'> <i className="fa-solid fa-check"></i> </p> : '' }
                    
                        </div>
                    
                        <div className='box-mb'>
                        
                        <label htmlFor="exampleInputPassword2" className="form-label-City">Cofirmación</label>
                    
                        <div className='box d-flex'>
                    
                        <div className='box-fa-solid'>
                    
                            <i className="fa-sharp fa-solid fa-unlock"></i>
                    
                        </div>
                    
                        <input type="password" className="form-control" id="exampleInputPassword2" name='password2' aria-describedby="password2emailHelp"
                        value={password2} onChange={ (e) => setPassword2(e.target.value)}/>        

                        </div>

                        { errorPassword2 ? <p className='p-error'> Deden coincidir </p> : '' }
                    
                        </div>
                    
                    </div>

                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Activar sesión</label>
                    </div>
                    
                    <div id="emailHelp" className="form-text"> <strong> Esta información no se comprate con terceros! </strong> </div>
                    <button type="submit" className="btn btn-primary">Continuar</button>

                </form>

            </div>

        }

        </div>

    )

}

export default Registro



