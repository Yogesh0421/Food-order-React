import React, { useState } from 'react'
import './LoginPopUp.css'
import cross from '../../assets/cross.svg'

const LoginPopUp = ({setshowLogin}) => {

    const [currState, setcurrState] = useState('Sign Up')

  return (
    <div className='login-popup'>
        <form  className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img src={cross} alt="" onClick={()=>setshowLogin(false)} />
            </div>
            <div className="login-popup-inputs">
                {currState==='Login'?<></>:<input type="text" placeholder='Your Name' required />}             
                <input type="email" placeholder='Enter E-mail' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button>{currState==='Sign Up'?'Create Account':'Login'}</button>
            <div className="login-popup-condition">
                <input type="checkbox" name="" id="" />
                <p>By continuing, i agree to the terms of use & Privacy policy</p>
            </div>
            {currState==='Login'
            ?<p>Create a new Account. <span onClick={()=>setcurrState("Sign Up")}>Click here</span> </p>
            :<p>Already have an  Account? <span onClick={()=>setcurrState("Login")}>Login</span> </p>}
            
            
        </form>
    </div>
  )
}

export default LoginPopUp