import React, { useState } from 'react'
import { Company } from './types'
import Home from '../pages/Home'

const SearchBar = () => {
  const [search, setSearch] = useState('')
  const [filteredData, setFilteredData] = useState<Company[] | null>(null)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  if (filteredData) {
    // return <Home data={filteredData} loading={false} error="" handleSearch={handleSearch} />
  }

  return (
    <div>SearchBar</div>
  )
}

export default SearchBar