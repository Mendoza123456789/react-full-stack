import '../styles/Form.css';
import React, { Component } from 'react';
//import { useNavigate } from 'react-router-dom';

class Form extends Component {

  constructor(props){

    super(props);
    this.state={

                hecho: false, 
                email: '',
                telefono: '',
                password1: '',
                password2:'',

                }
  }

  registro = async () =>
  {

      this.setState({

        hecho: true, 
        email: this.email.value,
        telefono: this.telefono.value,
        password1:this.password1.value,
        password2:this.password2.value

    })

    console.log( "VALOR DE EMAIL",  this.email.value)
    console.log( "VALOR DE TELEFONO",  this.telefono.value )
    console.log( "VALOR DE PASSWORD",  this.password1.value )

    const res = await fetch('http://localhost:8080/query', {

      method: 'POST',
      body: [ this.email.value, this.telefono.value, this.password1.value, this.password2.value ],

    })

    const data = await res.jason()
    console.log("LO QUE ENTRA DEL FORM COMO JSON: ", data)

  }
    
  nuevoRegistro = () =>
  {

    this.setState({

      hecho: false, 
      email: '',
      telefono: '',
      password1: '',
      password2:'',

    })

  }

    render(){

      if (this.state.hecho)
      return (

        <div className='box-hecho'>

          <h5> Bienvenido, {this.state.email}! </h5>
          <p>  Gracias por registrate. </p>
          <p>  Espero que sea de tu agrado. </p>

          <button type="submit" className="btn btn-primary" onClick={this.nuevoRegistro}>Registro nuevo</button>

        </div>

      )

      return (
        <div className="Form">

          <form className='box-form'>

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
                     ref = {input => this.email = input} />        

              </div>

            </div>

            <div className="mb-3">

              <label htmlFor="exampleInputTelefono" className="form-label">Teléfono</label>

              <div className='box d-flex'>

                <div className='box-fa-solid'>

                  <i className="fa-sharp fa-solid fa-house-user"></i>

                </div>
                
                <input type="text" className="form-control" id="exampleInputTelefono" name="telefono" aria-describedby="telefonoHelp"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Ejemplo: 111-222-3333" required
                  ref = {input => this.telefono = input} />

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
                          ref = {input => this.password1 = input} />
                    
                    </div>
              
                  </div>
              
                  <div className='box-mb'>
                    
                    <label htmlFor="exampleInputPassword2" className="form-label-City">Cofirmación</label>
              
                    <div className='box d-flex'>
              
                    <div className='box-fa-solid'>
              
                      <i className="fa-sharp fa-solid fa-unlock"></i>
              
                    </div>
              
                    <input type="password" className="form-control" id="exampleInputPassword2" name='password2' aria-describedby="password2emailHelp"
                          ref = {input => this.password2 = input} />      

                    </div>
              
                  </div>
              
                </div>

                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label" htmlFor="exampleCheck1">Activar sesión</label>
                </div>
                
                <div id="emailHelp" className="form-text"> <strong> Esta información no comprate con terceros! </strong> </div>
                <button type="submit" className="btn btn-primary" onClick={this.registro}>Continuar</button>

          </form>

        </div>
    );

    }

  }

export default Form;

  