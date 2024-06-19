import React from 'react'
import ReactDOM from 'react-dom/client'
import "../styles/index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Shop from './Shop.jsx'
import ErrorPage from './ErrorPage.jsx'
import App from './App.jsx'
import HomePage from './HomePage.jsx'
import Cart from './Cart.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
