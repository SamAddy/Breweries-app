import React from 'react'

import manageLoading from './manageLoading'

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

const CompanyList = ({ data }: { data: Company[] }) => {
  return (
    <div>
        {data.map((item: Company) => 
        (<p key ={ item.id }>{ item.name }</p>))}
    </div>
  )
}

const CompanyListManageLoading = manageLoading(CompanyList, "https://api.openbrewerydb.org/v1/breweries")
export default CompanyListManageLoading