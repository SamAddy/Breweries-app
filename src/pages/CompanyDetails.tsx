import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { List, ListItem, ListItemText, Typography } from '@mui/material'
import axios from 'axios'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"

import { Company } from '../types/Company'
import Footer from './Footer'
import { ValidationError } from '../types/Error'

const CompanyDetails = () => {
    const { id } = useParams<{ id: string }>()
    const [company, setCompany] = useState<Company | null>(null)
    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        axios
            .get(`https://api.openbrewerydb.org/v1/breweries/${id}`)
            .then ((respone) => {
                setCompany(respone.data)
                setLoading(false)
            })
            .catch((error) => {
                if (axios.isAxiosError<ValidationError, Record<string, unknown>>(error)) {
                    console.log(error.status)
                    console.log(error.response)
                    setLoading(false)
                }
                else {
                    console.log(error)
                    setError(error)
                    setLoading(false)
                }
            })
    }, [id])
    if (loading) {
        return <p>Loading..</p>
    }
    if (error) {
        return <p>{error}</p>
    }
    if (!company) {
        return <p>No data found.</p>
    }
    const latitude = parseFloat(company.latitude)
    const longitude = parseFloat(company.longitude)
    return (
        <div>
            {company ? (
                <div>
                    <Typography variant="h4" component="h1">
                        {company.name}
                    </Typography>
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
                    <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false} style={{ height: "400px" }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[latitude, longitude]}>
                            <Popup>
                                {company.name} <br /> {company.street}, {company.city},{" "}
                                {company.state} {company.postal_code}, {company.country}
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <Footer />
        </div>
    )
}

export default CompanyDetails