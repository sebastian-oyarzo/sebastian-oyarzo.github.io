import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter , createHashRouter , RouterProvider } from 'react-router-dom'
import ContextProvider from './Context.jsx'
import { Home } from './views/Home'
import { NavdarPizza } from './components/NavdarPizza'
import { Carrito } from './views/Carrito'
import { HomePizza } from './views/HomePizza'
import { DetallePizza } from './views/DetallePizza'
import { Navigate } from 'react-router'

const router = createHashRouter([
  {
    path:"/",
    element: <Home /> ,
  },
  {
    path:"/homepizza",
    element:
      <div>
      <NavdarPizza />
      <HomePizza />
      </div>
  },
  {
    path:"/pizza/:id" ,
    element:
      <div>
        <NavdarPizza />
        <DetallePizza />
      </div>
  },
  {
    path:"/pizza/:*",
     element:
      <div>
           <NavdarPizza />
           <Navigate to="/" />
      </div>
  },
  {
    path:"/carrito",
    element:
      <div>
        <NavdarPizza />
        <Carrito />
      </div>
  } ,
  {
    path:"*" ,
    element:<Navigate to="/" />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </RouterProvider>
    </ContextProvider>
  </React.StrictMode>
)