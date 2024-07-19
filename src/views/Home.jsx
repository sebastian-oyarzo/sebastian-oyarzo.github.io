// import { Pdf } from '../assets/SebastianOyarzoCurriculum.pdf'
import { NavdarHome } from '../components/NavdarHome'
import imagen from '../assets/img/foto.sebastian.png'
import { Link } from 'react-router-dom';
import'./Home.css'
import React from 'react'

export const Home = () => {
  return (
    <div>
          <NavdarHome/>
        <div className='border main'>
            <img src={ imagen } alt="foto de perfil"  className='perfil border'/>
            <div>
                <div className='descripcion border'>
                  <p>Proyectos destacables:</p>
                  <p>-una simulacion de una pagina para pedir pizzas, contiene menu, carrito, detalles y botones funcionales utilizando react router. sin utilizar bootstrap <Link to="/homepizza">market pizza</Link>
                  </p>
                  <p>- simulacion de un registro de usuario, contiene todas las validaciones correspondientes al ingresar datos, responsivo. utilizando bootstrap <Link to="/Registro">Registro</Link>
                  </p>
                </div>
            </div>
        </div>
    </div>
  )
}