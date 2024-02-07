import { useState } from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Login />
       
    </>
  )
}

export default App
