import React from 'react'
import {Typography } from '@mui/material'
import { Link, Outlet } from 'react-router-dom'
import GitHub from '@mui/icons-material/GitHub'

import manageLoading from '../components/manageLoading'

const Home = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="breweries">Breweries</Link>
          <Link to="contact">Contact</Link>
        </nav>
      </header>
      <hr />
      <Outlet />
      <hr />
      <footer>
        <div className="contact">
          <a href="https://github.com/SamAddy" target="_blank" rel="noopener noreferrer">
            <GitHub />
          </a>
          <Link to='/'>Home</Link>
          <Link to='breweries'>Breweries</Link>
          <Link to='contact'>Contact</Link>
        </div>
        <Typography className="copyright">&copy; 2023 SamAddy</Typography>
      </footer>
    </div>
    )
}

const HomeManageLoading = manageLoading(
    Home,
    'https://api.openbrewerydb.org/v1/breweries'
)

export default HomeManageLoading