//import Home from './components/Home'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import Navbarra from './components/Navbarra'
import Pizza from './components/Pizza'
//import CardPizza from './components/CardPizza'
//import Cart from './components/Cart'
//import RegistroForm from './components/Registro'
//import Login from './components/Login'


function App() {
  return (
    <div>
      <Navbarra/>
      {/*<Cart/> */}
      {/*<Home/> */}
      {/*<RegistroForm /> */}
      {/*<Login/> */}
      <Pizza />
      <Footer />
    </div>
  )
}
export default App



