import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Footer } from './components/Footer/Footer.jsx'
import { SearchBar } from './components/SearchBar/SearchBar'
import { AutomovilList } from './components/ComprarAuto/AutomovilList/AutomovilList'
import { ComprarAuto } from './components/ComprarAuto/ComprarAuto'

function App() {
  const [count, setCount] = useState(0)

  return <>
    <Footer/>
    <SearchBar />
    <ComprarAuto />
  </>
}

export default App
