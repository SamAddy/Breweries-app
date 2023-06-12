import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './App.css'
import NotFound from './pages/NotFound';
import CompanyDetails from './pages/CompanyDetails'
import ContactForm from './pages/ContactForm';
import CompanyListManageLoading from './components/CompanyList';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <CompanyListManageLoading />,
    errorElement: <NotFound />,
  },
  {
    path: "breweries/:id",
    element: <CompanyDetails />
  },
  {
    path: "contact",
    element: <ContactForm />
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