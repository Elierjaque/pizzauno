import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbarra'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/pizza/p001' element={<Pizza />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/404' element={<NotFound />}/>
      </Routes>
      <Footer />
    </>
  )
}
export default App