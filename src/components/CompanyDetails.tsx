import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, CardContent, List, ListItem, ListItemText, Typography } from '@mui/material'
import axios, { AxiosError } from 'axios'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"

import { Company } from './types'
import NotFound from '../pages/NotFound'

const CompanyDetails = () => {
    const { id } = useParams<{ id: string }>()
    const [company, setCompany] = useState<Company | null>(null)

    useEffect(() => {
        axios
            .get(`https://api.openbrewerydb.org/v1/breweries/${id}`)
            .then ((respone) => {
                setCompany(respone.data)
            })
            .catch((e) => {
                const error = e as AxiosError
                console.log(error.message)
            })
    }, [id])
    
    if (!company) {
        return <NotFound />
    }
    const latitude = parseFloat(company.latitude)
    const longitude = parseFloat(company.longitude)
    const position = latitude && longitude ? [latitude, longitude] : [51.505, -0.09]

    return (
        <div>
            {company ? (
                <div>
                    <Typography variant="h4" component="h1">
                        {company.name}
                    </Typography>
                    {/* <MapContainer center={position} zoom={13} style={{ height: "400px" }}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={position}>
                            <Popup>
                                {company.name} <br /> {company.street}, {company.city},{" "}
                                {company.state} {company.postal_code}, {company.country}
                            </Popup>
                        </Marker>
                    </MapContainer> */}
                    <List>
                        <ListItem>
                            <ListItemText primary="Type" secondary={company.brewery_type} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Address" secondary={company.street} />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="City"
                                secondary={`${company.city}, ${company.state}`}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Country" secondary={company.country} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Phone" secondary={company.phone} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Website" secondary={company.website_url} />
                        </ListItem>
                    </List>
                    <Button variant="contained" color="primary" onClick={() => window.history.back()}>
                        Go Back
                    </Button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default CompanyDetails