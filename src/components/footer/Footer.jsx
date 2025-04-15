import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import linkedin from '../../assets/linkedin.svg'
import twitter from '../../assets/twitter.svg'
import facebook from '../../assets/facebook_black.svg'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nulla consequuntur minus! Nulla sit consectetur in error labore eligendi vero sint provident architecto. Iusto, quasi?</p>
                <div className="footer-social-icons">
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={linkedin} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+1 111-222-3330</li>
                    <li>Food@delivery.com</li>
                </ul>
            </div>
        </div>

        <hr />
        <p className='footer-copyright'>
            copyright 2025 © Tomato.com | All Right Reserved.
        </p>

    </div>
  )
}

export default Footer