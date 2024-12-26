import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { FitnessProvider } from './Contexts/FitnesContext'
import { HomePage } from './Pages/HomePage'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <FitnessProvider>
        <HomePage/>
      </FitnessProvider>
    </>
  )
}

export default App
