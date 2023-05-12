import React from 'react'
import GitHub from '@mui/icons-material/GitHub'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <hr />
            <footer>
                <div className="contact">
                    <a href="https://github.com/SamAddy" target="_blank" rel="noopener noreferrer">
                        <GitHub />
                    </a>
                    <Link to='/'>Home</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
                <Typography className="copyright">&copy; 2023 SamAddy</Typography>
            </footer>
        </div>
    )
}

export default Footer