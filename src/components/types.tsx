export interface Company {
    id: string,
    name: string,
    brewery_type: string,
    address_1: string,
    address_2: string | null,
    state_province: string
    postal_code: string,
    country: string,
    website_url: string
}
