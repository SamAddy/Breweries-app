import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import CompanyListManageLoading from './components/CompanyList'
import Home from './pages/Home'
import CompanyCard from './components/CompanyCard'
import { Company } from './components/types';
import HomeManageLoading from './pages/Home';
import NotFound from './pages/NotFound';
import CompanyPage from './pages/CompanyPage'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        path: "company",
        element: <CompanyPage />
      }
    ]
  }
])

const App = () => {
  return (
    <div>
      {/* <HomeManageLoading /> */}
      {/* <CompanyListManageLoading /> */}
      <RouterProvider 
      router={router} 
      />
    </div>
  )
}

export default App