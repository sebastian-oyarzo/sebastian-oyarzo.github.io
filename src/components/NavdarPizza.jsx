import React from 'react'
import pizzaIcon from '../assets/img/Pizza-favicon.ico'
import shoppingIcon from '../assets/img/Shopping-favicon.ico'
import { useContext } from 'react'
import { Context } from '../Context'
import { useNavigate } from 'react-router'

export const NavdarPizza = () => {

  const { Precio , PuntoDecimal} = useContext(Context)

  const Navigate = useNavigate()

  const returnHome = () => {
    Navigate('/homepizza')
  }

  const goToCarrito = () => {
    Navigate('/carrito')
  }

  const returnAll = () => {
    Navigate('/')
  }


  return (
    <div className='navdarPizza'>
        <div className='startNavdar' onClick={() => returnHome()}>
            <img className="ico" src={pizzaIcon} alt="icono de pizza" />
            <h6 className='navdarP'> Pizzeria Mama Mia!</h6>
        </div>
        <dir>
            <button className='ButtonReturn' onClick={() => returnAll()}>volver a pag. principal</button>
        </dir>
        <div className='endNavdar' onClick={() => goToCarrito()}>
            <img  className="ico" src={shoppingIcon} alt=" carro de compras" />
            <h6 className='navdarP'>$ { PuntoDecimal(Precio) } </h6>
        </div>
    </div>
  )
}
