import React from 'react'

import { Box, Button, TextField, Typography } from '@mui/material'

const ContactForm = () => {
    return (
        <div className='form'>
            <Typography variant="h4" align="center" className='caption' gutterBottom>
                Contact Us
            </Typography>
            <Box
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
                />
                <TextField
                    fullWidth
                    label="E-mail"
                    id="fullWidth"
                    margin="normal"
                />
                <TextField
                    fullWidth
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    rows={8}
                    margin="normal"
                />
            </Box>
            <Button variant="contained">Submit</Button>
        </div>
  )
}

export default ContactForm