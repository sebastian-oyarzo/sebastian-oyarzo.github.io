import './App.css'
import { Navdar } from './assets/components/Navdar'
import { Main } from './assets/components/Main'
import imagen from '../src/assets/img/foto.sebastian.png'


function App() {

  return (
    <>
      <Navdar/>
      <Main perfil={imagen}/>
    </>
  )
}

export default App