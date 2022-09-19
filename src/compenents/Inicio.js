import '../styles/Inicio.css';
import img1 from '../images/registro.PNG'
import img1_2 from '../images/registro2.PNG'
import img2 from '../images/login.PNG'
import img2_2 from '../images/login2.PNG'
import img3 from '../images/privada.PNG'
import img3_2 from '../images/privada2.PNG'
import img4 from '../images/actualizar.PNG'
import img4_2 from '../images/actualizar2.PNG'
import Header from './Header';


export default function Incio() {

    return (

      <div>

        <Header/>

        <div className="Inicio">

        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className='box-img'>

              <img src={img1_2} className=" img_2 w-100" alt="..."/>
              <img src={img1} className=" img w-100" alt="..."/>

              </div>
              <div className="carousel-caption d-md-block">
                <h5 className='h5-carousel'>1. Registro</h5>
                <p className='p-carousel'>Puedes registrarte para tener una cuenta personal</p>
              </div>
            </div>
            <div className="carousel-item">
            <div className='box-img'>

            <img src={img2_2} className=" img_2 w-100" alt="..."/>
              <img src={img2} className=" img w-100" alt="..."/>

            </div>
              <div className="carousel-caption d-md-block">
                <h5 className='h5-carousel'>2. Login</h5>
                <p className='p-carousel'>Una vez que tienes tu usuario, puedes loguearte</p>
              </div>
            </div>
            <div className="carousel-item">
            <div className='box-img'>

              <img src={img3_2} className=" img_2 w-100" alt="..."/>
              <img src={img3} className=" img w-100" alt="..."/>

            </div>
              <div className="carousel-caption d-md-block">
                <h5 className='h5-carousel'>3. Usuarios activos</h5>
                <p className='p-carousel'>En tu sesión activa, puedes ver los demás usuarios</p>
              </div>
            </div>
            <div className="carousel-item">
            <div className='box-img'>

              <img src={img4_2} className=" img_2 w-100" alt="..."/>
              <img src={img4} className=" img w-100" alt="..."/>

            </div>
              <div className="carousel-caption d-md-block">
                <h5 className='h5-carousel'>4. Actualizar usuario</h5>
                <p className='p-carousel'>Puedes editar o borrar algún usuario</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <i className="fa-solid icon-carousel fa-angles-left"></i>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <i className="fa-solid icon-carousel fa-angles-right"></i>
            <span className="visually-hidden">Next</span>
          </button>
        </div>  
        </div>

      </div>

    );
  }
  