import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import axios from 'axios'

import manageLoading from '../components/manageLoading'
// import './../App.css'

interface Company {
    id: string,
    name: string,
    brewery_type: string,
    address_1: string,
    address_2: string | null,
    city: string,
    state_province: string
    postal_code: string,
    country: string,
    website_url: string
}

interface Props {
    data: Company[];
}


const Home = () => {
    const [companies, setCompanies] = useState<Company[]>([]);

    useEffect(() => {
        axios.get('https://api.openbrewerydb.org/v1/breweries')
            .then(response => {
                setCompanies(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Breweries
            </Typography>
            <Grid container spacing={3}>
                {companies.map(company => (
                    <Grid item key={company.id} xs={12} sm={6} md={4}>
                        <Box>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        {company.name}
                                    </Typography>
                                    <Typography color="textSecondary">
                                        {company.city}, {company.state_province}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {company.brewery_type}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">
                                        <a href={company.website_url} target="_blank" rel="noopener noreferrer">
                                            Learn More
                                        </a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <footer>No Copyright</footer>
        </div>
    )
}

const HomeManageLoading = manageLoading<Props>(
    Home,
    'https://api.openbrewerydb.org/v1/breweries'
);

export default HomeManageLoading