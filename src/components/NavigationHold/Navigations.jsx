import React from 'react'
import Styles from './Navigation.module.css'
const Navigations = () => {
  return (
    <nav className={`${Styles.navigation} container`}>
    <div className='logo'>
      <img src="./images/Frame 2 1.png" alt="" />
    </div>
   
    <ul>  
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    </nav>
  )
}

export default Navigations
