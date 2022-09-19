import '../styles/Actualizar.css';
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeaderPrivado from './HeaderPrivado';
import Header from './Header';

//const URL = 'http://localhost:8080/query/'
const URL = 'https://am-react-back.herokuapp.com/query/'


const Actualizar = () => {

    const navigate = useNavigate()

    const [emailLocalStore] = useState(localStorage.getItem('pseudonimo'))
    const [emailForm, setEmail] = useState('')
    const [telefonoForm, setTelefono] = useState('')
    const [pseudonimoForm, setPseudonimo] = useState('')

    const {id} = useParams()
    const {email} = useParams()
    const {telefono} = useParams()
    const {pseudonimo} = useParams()

    
    const update =  async (e) => {

        e.preventDefault()
        await axios.put(URL + id, {

            email: emailForm,
            telefono: telefonoForm,
            pseudonimo: pseudonimoForm,

        })

        console.log("LO QUE ENTRA POR EMAILFORM", emailForm)
        navigate('/privada')

    }

    return(

        <div>

            { !emailLocalStore ?

                <div>

                <Header/>

                    <div className="alert alert" role="alert">

                    <p className='p-alert'>

                        Antes debes iniciar sesión. 
                    
                    </p>

                    <p className='p-alert-icon'>

                        <i className="fa-solid fa-triangle-exclamation"></i>

                    </p>

                    <div className='box-button-login'>

                        <p className='p-alert-button'>

                        <button type="button" className="btn btn-primary" onClick={ () => navigate('/login')}>Iniciar sesión</button>

                        </p>


                    </div>

                    </div>

                </div>

            :

            <div>

                <HeaderPrivado/>

                <div className="Form">

                <form className='box-form' onSubmit={update}>

                <div className='mb-3'>

                    <p className='p-mb'>

                    Actualizar usuario

                    </p>

                </div>

                <div className="mb-3">
                    
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>

                    <div className='box d-flex'>

                    <div className='box-fa-solid'>

                        <i className="fa-sharp fa-solid fa-envelope"></i>

                    </div>
                    
                    <input type="email" className="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp" required
                    placeholder={email} onChange={ (e) => setEmail(e.target.value)}/>        

                    </div>

                </div>

                <div className="mb-3">

                    <label htmlFor="exampleInputTelefono" className="form-label">Teléfono</label>

                    <div className='box d-flex'>

                    <div className='box-fa-solid'>

                        <i className="fa-solid fa-phone"></i>

                    </div>
                    
                    <input type="text" className="form-control" id="exampleInputTelefono" name="telefono" aria-describedby="telefonoHelp"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required
                    placeholder={telefono} onChange={ (e) => setTelefono(e.target.value)}/>        

                    </div>

                </div>

                <div className="mb-3">

                    <label htmlFor="exampleInputTelefono" className="form-label">Pseudonimo</label>

                    <div className='box d-flex'>

                    <div className='box-fa-solid'>

                        <i className="fa-sharp fa-solid fa-user"></i>

                    </div>

                    <input type="text" className="form-control" id="exampleInputPseudonimo" name="telefono" aria-describedby="telefonoPseudonimo" required
                    placeholder={pseudonimo} onChange={ (e) => setPseudonimo(e.target.value)}/>        

                    </div>

                </div>

                <div id="emailHelp" className="form-text"> <strong> Esta información no se comprate con terceros! </strong> </div> 

                <div className='d-flex'>

                    <div className='box-btn'> 

                        <button type="submit" className="btn btn-primary">Actualizar</button>   

                    </div>

                    <div className='box-btn'> 

                        <button type="button"  onClick={ () => navigate('/privada')} className="btn btn-danger">Cancelar</button>

                    </div>

                </div>

                </form>

                </div>

                </div>

            }

        </div>

    )

}

export default Actualizar