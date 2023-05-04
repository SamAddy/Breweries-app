import React from 'react'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'

import { Company } from './types';



interface Props {
    company: Company;
}

const CompanyCard = ({ company }: Props) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {company.name}
                </Typography>
                <Typography color="textSecondary">
                    {company.brewery_type}
                </Typography>
                <Typography variant="body2" component="p">
                    {company.address_1}, {company.state_province}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default CompanyCard