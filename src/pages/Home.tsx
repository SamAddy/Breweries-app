import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, Grid, Link, TextField, Typography } from '@mui/material'
import axios from 'axios'

import manageLoading from '../components/manageLoading'
import { Company } from '../components/types'
import SearchBar from '../components/SearchBar'
import CompanyCard from '../components/CompanyCard'
import { Outlet } from 'react-router-dom'

interface Props {
    data: Company
}

const useDebounce = <T,>(
    filterFunc: (breweries: T[], filter: string) => T[], 
    breweries: T[]
    )  => {
        const [filteredData, setFilteredData] = useState(breweries)
        const [filter, setFilter] = useState("")
        useEffect(() => {
            const timer = setTimeout(() => {
                setFilteredData(filterFunc(breweries, filter))
            }, 1000)
            return () => {
                clearTimeout(timer)
            }
        }, [filter, breweries])
        const onChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
            setFilter(event.target.value)
        }
        return {
            onChangeFilter,
            filter,
            filteredData
        }
    }

const Home = () => {
    const [companies, setCompanies] = useState<Company[]>([])
    const filterBreweries = (breweries: Company[], filter: string) => {
        return breweries.filter(brewery => 
            brewery.name.toLowerCase().includes(filter.toLowerCase())
        )
    }
    const {
        onChangeFilter,
        filter,
        filteredData } = useDebounce<Company>(filterBreweries, companies)
    useEffect(() => {
        axios.get('https://api.openbrewerydb.org/v1/breweries')
            .then(response => {
                setCompanies(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <div>
            <Typography variant="h4" align="center" gutterBottom>
                Breweries
                <TextField
                placeholder="Search by name"
                variant="outlined"
                className="search"
                value={filter}
                onChange={onChangeFilter}
            />
            </Typography>
            <Grid container spacing={3}>
                {companies.map(company => (
                    <Grid item key={company.id} xs={12} sm={6} md={4}>
                        <Box>
                            <Card variant="outlined">
                                <CardActionArea>
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
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" href={company.website_url} target="_blank" rel="noopener noreferrer">
                                        Visit Brewery Site
                                    </Button>
                                </CardActions>
                            </Card>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

const HomeManageLoading = manageLoading(
    Home,
    'https://api.openbrewerydb.org/v1/breweries'
)

export default HomeManageLoading