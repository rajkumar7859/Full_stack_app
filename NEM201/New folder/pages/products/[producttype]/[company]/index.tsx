import { useRouter } from 'next/router';
import React from 'react'

const Company = () => {
    const router = useRouter()
    const { company } = router.query;
    return (
        <>
            <h1>Company: {company}</h1>
            <h3>Ram: 8GB</h3>
            <h3>Processor: i5 11th gen</h3>
            <h3>display: 15 inch</h3>
        </>
    )
}

export default Company