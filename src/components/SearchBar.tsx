import React, { useState } from 'react'
import { Company } from '../types/types'
import Home from '../pages/Home'
import { TextField } from '@mui/material'

const SearchBar = () => {
  const [search, setSearch] = useState('')
  const [filteredData, setFilteredData] = useState<Company[] | null>(null)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <TextField 
        id='outlined-basic'
        variant='outlined'
        label='Search for brewery'
        placeholder='Search for brewery by name'
        onChange={handleSearch}/>
    </div>
  )
}

export default SearchBar