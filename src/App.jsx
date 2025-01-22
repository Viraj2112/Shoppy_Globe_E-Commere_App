import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import appStore from './utils/appStore' 
import { Provider } from 'react-redux'

function App() {

  return (
    <>
      {/* Below providing the appstore Access to entire Application */}
      <Provider store={appStore}>
        <div className='container mx-auto'>
          <Header/>
          {/* Below Outlet contains following Components - About, Cart, Checkout, ProductDetail, ProductList */}
          <Outlet/>
          <Footer/>
        </div>
      </Provider>
    </>
  )
}

export default App
