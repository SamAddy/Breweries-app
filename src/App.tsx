import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import CompanyPage from './pages/CompanyPage'
import CompanyDetails from './components/CompanyDetails'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "breweries",
    element: <CompanyPage />
  },
  {
    path: "breweries/:id",
    element: <CompanyDetails />
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider 
      router={router} 
      />
    </div>
  )
}

export default App