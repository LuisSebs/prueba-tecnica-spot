import './App.css'
import { Navbar } from './components/Navbar/Navbar.jsx'
import { SearchBar } from './components/SearchBar/SearchBar.jsx'
import { ComprarAuto } from './components/ComprarAuto/ComprarAuto.jsx'

/**
 * 
 * @returns Applicacion
 */
function App() {
  return <>
    <Navbar />
    <SearchBar />
    <ComprarAuto />
  </>
}

export default App
