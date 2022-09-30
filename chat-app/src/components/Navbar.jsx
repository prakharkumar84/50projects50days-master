import React from 'react'
import "../pages/style.css"

export const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>Tindier Chat</span>
        <div className='user'>
                <img className='image1' src='https://picaflor-azul.com/images/plus-circle1.png' alt=''></img>
                <span>Prakhar Kumar</span>
        </div>
        <button>LogOut</button>
    </div>
    
  )
}
