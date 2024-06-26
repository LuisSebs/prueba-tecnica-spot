import './App.css'
import { Navbar } from './components/Navbar/Navbar.jsx'
import { SearchBar } from './components/SearchBar/SearchBar.jsx'
import { ComprarAuto } from './components/ComprarAuto/ComprarAuto.jsx'

/**
 * Prueba Tecnica ESPOT
 * @author Arrieta Mancera Luis Sebastian
 * @returns Prueba Tecnica ESPOT
 */
function App() {
  return <>
    <Navbar />
    <SearchBar />
    <ComprarAuto />
  </>
}

export default App
