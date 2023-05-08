import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import CompanyDetails from './components/CompanyDetails'
import ContactForm from './pages/ContactForm';
import CompanyListManageLoading from './components/CompanyList';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        path: "breweries",
        element: <CompanyListManageLoading />
      },
      {
        path: "breweries/:id",
        element: <CompanyDetails />
      },
      {
        path: "contact",
        element: <ContactForm />
      }
    ]
  },
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