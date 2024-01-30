
import './App.css'

// Importando o link 
import {  Outlet } from 'react-router-dom'; 
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='app'>
      <Navbar /> 
      <Outlet />
    </div>
   )
}

export default App
