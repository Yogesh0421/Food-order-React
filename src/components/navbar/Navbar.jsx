import React, { useContext } from 'react'
import { useState } from 'react'
import logo from '../../assets/logo.png'
import search from '../../assets/search.svg'
import basket from '../../assets/basket.svg'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setshowLogin }) => {

  const [menu, setmenu] = useState("home");

  const  {getTotalCartAmount} = useContext(StoreContext)

  return (
    <nav>
      <Link to={'/'}>
        <img src={logo} alt="" className='logo' />
      </Link>
      <ul className='navbar-menu'>
        <Link to={'/'} onClick={() => { setmenu("home") }} className={menu === 'home' ? 'active' : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => { setmenu("menu") }} className={menu === 'menu' ? 'active' : ""}>Menu</a>
        <a href='#footer' onClick={() => { setmenu("contact") }} className={menu === 'contact' ? 'active' : ""}>Contact US</a>
      </ul>
      <div className="navbar-right">
        <img src={search} alt="" />
        <div className="navbar-searchicon">
          <Link to={'/cart'}>
            <img src={basket} alt="" />
          </Link>
          <div className={getTotalCartAmount()===0?'':'dot'}></div>
        </div>
        <button onClick={() => setshowLogin(true)}>Sign In</button>
      </div>
    </nav>
  )
}

export default Navbar