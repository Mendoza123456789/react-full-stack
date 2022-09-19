import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Query from './compenents/Query';
import Footer from './compenents/Footer';
import Actualizar from './compenents/Actualizar';
import HeaderPrivado from './compenents/HeaderPrivado';


export default function Privada(props) {

    return (

      <BrowserRouter>
       
       <HeaderPrivado/>
  
        <Routes>
  
          <Route path='/privada/:email' element = { <Query/> } />
          <Route path='/actualizar/:id/:email/:telefono/:pseudonimo' element = { <Actualizar/> } /> 
  
        </Routes>
  
        <Footer/>
      
      </BrowserRouter>
  
    );  

}