import axios, {AxiosError} from 'axios'
import React, { useEffect, useState } from 'react'

const manageLoading = <T extends unknown>(ChildComponent: (props: { data: T }) => JSX.Element, url: string) => {
    return () => {
        const [data, setData] = useState<T | null>(null)
        const [error, setError] = useState<string>("")
        const [loading, setLoading] = useState<boolean>(true)
        useEffect(() => {
            axios
                .get<T>(url)
                .then ((respone) => {
                    setData(respone.data)
                    setLoading(false)
                })
                .catch((e) => {
                    const error = e as AxiosError
                    setError(error.message)                 
                    setLoading(false)
                })
            }, [])
        if (loading) {
            return <p>Loading...</p>
        }
        if (error) {
            return <p>{error}</p>
        }
        if (!data) {
            return <p>No data found.</p>
        }
        return <ChildComponent data={data} />
    }
}

export default manageLoading