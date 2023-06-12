import React from 'react'

import { Button, styled } from '@mui/material'
import { hover } from '@testing-library/user-event/dist/hover'

const CustomBtn = styled(Button)({
    variant: "contained",
    backgroundColor: "success",
    "& :hover": {
        backgroundColor: "success"
    }

})

export default CustomBtn