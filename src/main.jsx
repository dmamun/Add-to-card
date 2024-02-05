import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './Home.jsx'
import Fav from './Fav.jsx'
import Login from './Login.jsx'
import Product from './Product.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/home",
        element:<Home></Home>
      },
      {
        path:"/fav",
        element:<Fav></Fav>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/product/:id",
        element:<Product></Product>,
        loader:()=>fetch("/Phones.json/"),
      }

    ]
   
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
