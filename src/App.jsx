import React from 'react'
import { Home } from './views/Home'
import { Route , Routes } from 'react-router'
import { HomePizza } from './views/HomePizza'
import { DetallePizza } from './views/DetallePizza'
import { Navigate } from 'react-router'
import { NavdarPizza } from './components/NavdarPizza'
import { Carrito } from './views/Carrito'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/homepizza" element={
          <div>
          <NavdarPizza />
          <HomePizza />
          </div>
        } />
        <Route path="/pizza/:id" element={
          <div>
            <NavdarPizza />
            <DetallePizza />
          </div>
          } />
        <Route path="/pizza/:*" element={
          <div>
               <NavdarPizza />
               <Navigate to="/" />
          </div>
          } />
        <Route path="/carrito" element={
          <div>
            <NavdarPizza />
            <Carrito />
          </div>
          } />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App