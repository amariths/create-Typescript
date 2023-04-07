import React, { useState, useEffect} from "react"

interface Data {
    id: number,
    name: string
}



const Fetch = () => {

    const [data, setData] = useState<Data[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://avancera.app/cities')
            const jsonData = await response.json()
            setData(jsonData)
        }
        fetchData()
    }, [])

    return (
        <>
        <h1>Cities</h1>
        <ul>
            {data.map((item) => (
                <li key={item.id}>
                    {item.name}
                </li>
            ))}
        </ul>
        </>
    )


}

export default Fetch
