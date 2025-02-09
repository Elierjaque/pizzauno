import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbarra'
import Footer from './components/Footer'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import CartProvider from "./context/CartContext"
import ProtectedRoute from './components/ProtectedRoute'
import User from './components/User'


function App() {
  return (
    <>
      <CartProvider>
      <Navbar />
      <Routes>
         <Route path='/' element={<Home />}/>
          <Route path='/register' element={<User> <Register /> </User>}/>
          <Route path='/login' element={<User> <Login /> </User>}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/pizza/:id' element={<Pizza />}/>
          <Route path='/profile' element={<ProtectedRoute> <Profile /> </ProtectedRoute>}/>
          <Route path='*' element={<NotFound />}/>

      </Routes>
      <Footer />
      </CartProvider>

    </>
  )
}

export default App;
