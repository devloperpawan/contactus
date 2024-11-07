import { useState } from 'react';
import Button from '../button/Button';
import styles from './contactform.module.css';
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const Contactform = () => {
  const [names,setNames] = useState("");
  const [emails,setEmail] = useState("");
  const [text,setText] = useState("");

  const viaCall=()=>{
    console.log("I am from call.")
  }

  const onSubmitVal=(event)=>{
    event.preventDefault()
    setNames(event.target[0].value)
    setEmail(event.target[1].value)
    setText(event.target[2].value)
  }
  // console.log(names, emails, text)
  return (
    <>
    <div className={styles.components}>
    <div className={styles.textForm}>
      <div className={styles.button_form}>
      <Button text = "VIA SUPPORT CHAT" icon={<MdMessage/>}/>
      <Button onClick={viaCall} text = "VIA CALL" icon={<MdCall/>}/>
      </div>
    <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdEmail/>}/>
      
      <form onSubmit={onSubmitVal} className={styles.form_handle}>
      <div className={styles.form_control}>
      <label htmlFor="Name">Name</label>
      <input type="text" name='name' />
      </div>

      <div className={styles.form_control}>
      <label htmlFor="Email">Email</label>
      <input type="Email" name='Email' />
      </div>

      <div className={styles.form_control}>
      <label htmlFor="Text">Text</label>
      <textarea rows="5"></textarea>
      </div>
      <div className={styles.btnsubmit}>
      <button>Submit</button>
      </div>
      <div>
        {names +" "+ emails + " " + " "+text}
      </div>
      </form>
    </div>


    <div className={styles.formImage}>
    <img src="./images/Service 24_7-pana 1.svg" alt="" />
    </div>
    </div>
    </>
  )
}

export default Contactform
