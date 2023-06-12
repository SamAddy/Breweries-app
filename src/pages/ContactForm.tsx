import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { googleLogout } from '@react-oauth/google'
import GoogleOauth from '../components/GoogleOauth'

import Footer from './Footer'
import Header from './Header'
import { GoogleData } from '../types/User'


const GoogleLogout = () => {
    googleLogout()
}

const ContactForm = () => {
    const [user, setUser] = useState<GoogleData | null>(null)
    return (
        <div>
            <Header />
            <main>
                <Typography variant="h4" align="center" className='caption' gutterBottom>
                    Contact Us
                </Typography>
                <GoogleOauth />
                <Box
                    component="form"
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                >
                    <TextField
                        fullWidth
                        label="Full Name"
                        id="fullWidth"
                        margin="normal"
                        className='input'
                        value={user?.name || ''}
                    />
                    <TextField
                        fullWidth
                        label="E-mail"
                        id="fullWidth"
                        margin="normal"
                        value={user?.email || ''}
                    />
                    <TextField
                        fullWidth
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows={8}
                        margin="normal"
                    />
                    <Button variant="contained">Submit</Button>
                </Box>
                <Box
                    component="form"
                >
                    <Typography variant="h6">
                        Keep up to date
                    </Typography>
                    Join our newsletter for regular updates. No spam ever.
                    <Typography component="p">
                        Enter your email:
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        placeholder="example@email.com"
                    />
                    <Button variant="contained">
                        Subscribe
                    </Button>
                </Box>
            </main>
            <Footer />
        </div>
    )
}

export default ContactForm