import React from 'react'
import { Button, Card, CardContent, Typography } from '@mui/material'

import { Company } from './types'

interface CompanyProps {
    company: Company
}

const CompanyDetails: React.FC<CompanyProps> = ({ company }) => {
  return (
    <Card>
        <CardContent>
            <Typography variant="h4" component="h2">
                {company.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
                {company.brewery_type}
            </Typography>
            <Typography variant="body2" component="p">
                {company.street}
                <br />
                {company.city}, {company.state_province} {company.postal_code}
                <br />
                {company.country}
            </Typography>
            <Typography variant="body2" component="p">
                {company.phone}
            </Typography>
            <Typography variant="body2" component="p">
                {company.website_url}
            </Typography>
            <Button variant="contained" color="primary" onClick={() => window.history.back()}>
                Go Back
            </Button>
        </CardContent>
    </Card>
  )
}

export default CompanyDetails