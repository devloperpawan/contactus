import React from 'react'
import Styles from './ContactHeader.module.css'

const ContactHeader = () => {
  return (
    <div className={`${Styles.contact_desc}   container`}>
        <h1>CONTACT US</h1>
            <p>
            LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. 
            </p>
    </div>
  )
}

export default ContactHeader
