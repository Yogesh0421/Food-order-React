import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from '../src/pages/Home/Home'
import Cart from '../src/pages/Cart/Cart'
import PlaceOrder from '../src/pages/Placeorder/PlaceOrder'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import LoginPopUp from './components/Loginpopup/LoginPopUp'

function App() {

  const [showLogin, setshowLogin] = useState(true)

  return (
    <>
      {showLogin?<LoginPopUp setshowLogin={setshowLogin}/>:<></>}
      <div className='app'>
        <Navbar  setshowLogin={setshowLogin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/placeorder' element={<PlaceOrder/>} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
