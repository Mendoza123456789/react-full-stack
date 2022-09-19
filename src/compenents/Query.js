import '../styles/Query.css';
import axios from 'axios'
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderPrivado from './HeaderPrivado';
import Header from './Header';

//const URL = 'http://localhost:8080/query/'
const URL = 'https://am-react-back.herokuapp.com/query/'


const Query = () =>{

  const navigate = useNavigate()

  const [emailLocalStore] = useState(localStorage.getItem('pseudonimo'))
  const [usuarios, setBlog] = useState([])

  useEffect( () => {

    getBlogs()

  },[])

  const getBlogs = async () => {

    const res = await axios.get(URL)
    setBlog(res.data)

  }

   const deleteBlog = async (id) => {

      await axios.delete(`${URL} ${id}`)
      getBlogs()

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

            <p className='p-alert2'>

              Ruta protegida

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

        <div className='box-table'>

        <div className="box-h">

        <h6> Hola, {emailLocalStore.toUpperCase()}</h6>

          <h4>

            Usuarios Activos

          </h4>

        </div>

        {usuarios.map(usuario => {
          return (
            <div className="card" key={usuario.id}>

            <div className="card-header">
              Estatus: activo
            </div>
            <div className="card-body">

              <h5 className="card-title" > 
              ID-Usuario | {usuario.id}
              </h5>
              <p className="card-text" > <strong>Email</strong> | {usuario.email}</p>
              <p className="card-text" > <strong>Pseudonimo</strong> | {usuario.pseudonimo}</p>
              <p className="card-text" > <strong>Teléfono</strong> | {usuario.telefono}</p>

              <div className='d-flex'>

              <div className='box-btn'>      

                <button type="button"  onClick={ () => navigate(`/actualizar/${usuario.id}/${usuario.email}/${usuario.telefono}/${usuario.pseudonimo}`)} className="btn btn-primary">Actualizar</button>

              </div>

                <div className='box-btn'>       
                  
                  <button type="button" className="btn btn-danger" onClick={ () => deleteBlog(usuario.id)}>Elminar</button>
                
                </div>

              </div>

            </div>
            </div>
          );
        })}

        </div>

      </div>

      }

    </div>

  )

}

export default Query
/*export default function Query() {
    return (
      <div className="App">
  
        CONSULTA CON REACT
  
      </div>
    );
  }*/
  