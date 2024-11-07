import { useState } from 'react'
import './App.css'
import Navigations from './components/NavigationHold/Navigations'
import ContactHeader from './components/contactdesc/ContactHeader'
import Contactform from './components/ContactDefineBox/Contactform'
import styles from './index.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigations />
    <main className={styles.collectionsStores}>
    <ContactHeader />
    <Contactform/>
    </main>
    </>
  )
}

export default App
