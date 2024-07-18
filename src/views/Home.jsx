// import { Pdf } from '../assets/SebastianOyarzoCurriculum.pdf'
import { NavdarHome } from '../components/NavdarHome'
import imagen from '../assets/img/foto.sebastian.png'
import { Link } from 'react-router-dom';
import'./Home.css'
import React from 'react'

export const Home = () => {
  return (
    <div className='allhome'>
          <NavdarHome/>
        <div className='border main'>
            <img src={ imagen } alt="foto de perfil"  className='perfil border'/>
            <div>
                <div className='descripcion border'>
                  <p>Proyectos destacables:
                  <Link to="/homepizza">market pizza</Link>
                  </p>
                </div>
            </div>
        </div>
    </div>
  )
}