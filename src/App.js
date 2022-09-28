import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Query from './compenents/Query';
import Inicio from './compenents/Inicio';
import Form from './compenents/Form';
import Footer from './compenents/Footer';
import Login from './compenents/Login';
import Registro from './compenents/Registro';
import Actualizar from './compenents/Actualizar';


export default function App(props) {

    return (

      <BrowserRouter>

        <Routes>
  
          <Route path='/' element = { <Inicio /> } />
          <Route path='/registro' element = { <Registro/> } /> 
          <Route path='/keyframes-react' element = { <Form/> } /> 
          <Route path='/login' element = { <Login/> } />
          <Route path='/privada' element = { <Query/> } />
          <Route path='/actualizar/:id/:email/:telefono/:pseudonimo' element = { <Actualizar/> } /> 
  
        </Routes>
  
        <Footer/>
      
      </BrowserRouter>
  
    );  

}
