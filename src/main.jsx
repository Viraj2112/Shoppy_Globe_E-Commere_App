import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductList from './Components/ProductList.jsx'
import { lazy, Suspense } from 'react'

// using lazy and Suspense to get hold of the Components
const Checkout = lazy(() => import('./Components/Checkout.jsx'))
const About = lazy(() => import('./Components/About.jsx'))
const Error = lazy(() => import('./Components/Error.jsx'));
const Cart = lazy(() => import('./Components/Cart.jsx'));
const ProductDetail = lazy(() => import('./Components/ProductDetail.jsx'));

// Creating a BrowserRouter for Routing
const aptRouter = createBrowserRouter(
  [
    {
      path: '/',
      element: <App/>,
      errorElement: (
        <Suspense fallback={<div>Loading...</div>}>
          <Error/>
        </Suspense>
      ),
      children: [
        {
          path: '/',
          element: <ProductList/>
        },
        {
          path: '/about',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <About/>
            </Suspense>
          )
        },
        {
          path: '/cart',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Cart/>
            </Suspense>
          )
        },
        {
          path: '/product-detail/:id',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <ProductDetail/>
            </Suspense>
          )
        },
        {
          path: '/checkout',
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Checkout/>
            </Suspense>
          )
        }
      ]
    }
  ]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={aptRouter} /> {/* Here providing the aptRouter created to the Router Provider */}
  </StrictMode>,
)
