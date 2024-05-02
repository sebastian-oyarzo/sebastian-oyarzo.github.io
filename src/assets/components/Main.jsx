import React from 'react'
import { Pdf } from './Pdf'

export const Main = ({perfil}) => {
  return (
        <div className='border main'>
            <img src={perfil} alt="foto de perfil"  className='perfil border'/>
            <div>
                <p className='descripcion border'>Técnico superior en electrónica industrial, desarrollador Javascript FullStack con habilidades para trabajar en equipo, bajo
                  presión y realizar trabajos de manera ordenada y rápida. Experiencia en atención al
                  cliente, proactivo y responsable.</p>
                  <p className='descripcion border'>Redes sociales: <br/>
                  sdasdasd
                  </p>
                  <p className='descripcion border'>Curriculum: <br/>
                  <a href={Pdf} target='_blanck'>asdf</a>
                  </p>
            </div>
        </div>
  )
}
