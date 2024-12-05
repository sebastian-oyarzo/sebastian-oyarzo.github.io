// import { Pdf } from '../assets/SebastianOyarzoCurriculum.pdf'
import { NavdarHome } from '../components/NavdarHome'
import imagen from '../assets/img/foto.sebastian.png'
import { Link } from 'react-router-dom';
import'./Home.css'

export const Home = () => {
  return (
    <div>
          <NavdarHome/>
        <div className='border main'>
            <img src={ imagen } alt="foto de perfil"  className='perfil border'/>
            <div>
                <div className='descripcion border'>
                  <p>Proyectos destacables:</p>
                  <p>- Una simulacion de una pagina para pedir pizzas, contiene menu, carrito, detalles y botones funcionales utilizando react router. sin utilizar bootstrap <Link to="/homepizza">market pizza</Link>
                  </p>
                  <p>- Simulacion de un registro de usuario, contiene todas las validaciones correspondientes al ingresar datos, responsivo. utilizando bootstrap <Link to="/Registro">Registro</Link>
                  </p>
                  <p>Links:</p>
                  <p>- Linkedin: <a href="https://www.linkedin.com/in/sebastian-gonzalo-oyarzo-zapata-94a37025b/" target='blank'>https://www.linkedin.com/in/sebastian-gonzalo-oyarzo-zapata-94a37025b/</a></p>
                  <p>- Github: <a href="https://github.com/sebastian-oyarzo" target='blank'>https://github.com/sebastian-oyarzo</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}