import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import appStore from './utils/appStore'
import { Provider } from 'react-redux'

function App() {

  return (
    <>
      <Provider store={appStore}>
        <div className='container mx-auto'>
          <Header/>
          <Outlet/>
          <Footer/>
        </div>
      </Provider>
    </>
  )
}

export default App
