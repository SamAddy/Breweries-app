import React, { useEffect, useMemo, useState } from 'react'
import axios, { AxiosError } from 'axios'
import { Grid, Box, Card, CardActionArea, CardContent, Typography, CardActions, Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom'

import manageLoading from './manageLoading'
import { Company } from '../types/Company'
import Footer from '../pages/Footer'
import Header from '../pages/Header'

const useDebounce = <T,>(func: (items: T[], filter: string) => T[], items: T[], delay: number = 1000) => {
  const [filteredData, setFilteredData] = useState(items)
  const [filter, setFilter] = useState("")
  useEffect(() => {
      const timer = setTimeout(() => {
          setFilteredData(func(items, filter))
      }, delay)
      return () => {
          clearTimeout(timer)
      }
  }, [filter, func, items, delay])
  const onChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilter(event.target.value)
  }
  return { onChangeFilter, filter, filteredData }
}

const filterBreweries = (breweries: Company[], filter: string) => {
  return breweries.filter(brewery => brewery.name.toLowerCase().includes(filter.toLowerCase()))
}

const CompanyList = ({ data }: { data: Company[] }) => {
  const [companies, setCompanies] = useState<Company[]>([])
  const { onChangeFilter, filter, filteredData } = useDebounce<Company>(filterBreweries, companies)
    useEffect(() => {
        axios.get('https://api.openbrewerydb.org/v1/breweries')
            .then(response => {
                setCompanies(response.data)
            })
            .catch(e => {
                const error = e as AxiosError 
                console.log(error.message)
            })
    }, [])
    const memoizedCompanyCards = useMemo(() => {
      return filteredData.map(company => (
        <Grid item key={company.id} xs={12} sm={6} md={4}>
          <Box>
            <Card variant="outlined">
              <CardActionArea>
              <Link to={`/breweries/${company.id}`}>
                <CardContent className='card'>
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
                </Link>
              </CardActionArea>
              <CardActions>
                <Button size="small" href={company.website_url} target="_blank" rel="noopener noreferrer">
                  Visit Brewery Site
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
      ))
  }, [filteredData])
  return (
    <div>
      <Header />
      <main>
        <Typography variant="h4" align="center" className='caption' gutterBottom>
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
          {memoizedCompanyCards}
        </Grid>
      </main>
      <Footer />
    </div>
  )
}

const CompanyListManageLoading = manageLoading(CompanyList, "https://api.openbrewerydb.org/v1/breweries")

export default CompanyListManageLoading