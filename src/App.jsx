// import Home from './components/Home'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import Navbarra from './components/Navbarra'
import RegistroForm from './components/Registro'
import Login from './components/Login'


function App() {
  return (
    <div>
      <Navbarra/>
      {/* <Home /> */}
      <RegistroForm />
      <Login/>
      <Footer />
    </div>
  )
}
export default App



