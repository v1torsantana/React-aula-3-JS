import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Error from './components/Error.jsx'
import Produtos from './components/Produtos.jsx'
import Home from './components/Home.jsx'
import Exemplo1 from './components/Exemplo1.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([

  {path: '/', element: <App />,
    errorElement: <Error />,

    children: [
      {path: '/', element: <Home />},
      {path: '/produtos', element: <Produtos />},
      {path: '/exemplo1', element: <Exemplo1 />},

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
