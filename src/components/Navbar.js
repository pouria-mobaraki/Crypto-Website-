import React from 'react'
import { FaBars,FaTimes } from 'react-icons/fa'
import './Navbar.css'
import { useState } from 'react'

function Navbar() {
 
  const [click,setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <div className='header'>
      <div className='container'>
        <h1>دیجی <span className='primary'>ارز</span></h1>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <a href="">ارتباط با ما</a>
          </li>
          <li>
            <a href=""> درامد</a>
          </li>
          <li>
            <a href="">دسترسی ها</a>
          </li>
          <li>
            <a href=""> خانه</a>
          </li>
        </ul>
        <div className='btm-group'>
          <button className='btn'>اتصال به کیف پول</button>
        </div>

        <div className='hamburger' onClick={handleClick}>
          {click ? <FaTimes size={20} style={{color: '#333'}} /> : (
            <FaBars size={20} style={{color: '#333'}} />
          )}
          
        </div>
        
      </div>
    </div>
  )
}

export default Navbar