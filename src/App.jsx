import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {

  return (
    <>
      <div className='container mx-auto'>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  )
}

export default App
