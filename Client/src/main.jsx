import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import Home from './Pages/Home'
import ScrapSell from './components/ScrapSell'
import RatesPage from './components/Ratespage'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },{
        path:"home",
        element:<Home/>
      },{
        path:"scrap",
        element:<ScrapSell/>
      },
      {
        path:"rates",
        element:<RatesPage/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
