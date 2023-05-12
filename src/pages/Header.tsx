import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </header>
            <hr />
        </div>
    )
}

export default Header