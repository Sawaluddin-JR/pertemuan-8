import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Dashboard from './pages/Dashboard/index.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
// import Header from './components/Header/index.jsx'
import DetailProduct from './pages/DetailProduk/index.jsx'
import About from './pages/About/index.jsx'
import Shop from './pages/Shop/index.jsx'

const router = createBrowserRouter([
  // {
  //   path:'/',
  //   element:<App/>
  // },
  // {
  //   path:'/dashboard',
  //   element:<Dashboard/>
  // }
  {
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Dashboard/>
      },
      {
        path:'/detail-produk/:idProduk',
        element:<DetailProduct/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/shop',
        element:<Shop/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
