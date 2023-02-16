import { useRouter } from 'next/router'
import React from 'react'
import { GetServerSideProps } from 'next';
import Link from 'next/link';

const ProductType = ({ data }:any) => {
    const router = useRouter()
    const { producttype } = router.query;

    return (
        <>
            <h1>Product: {producttype}</h1>
        
            <div>
                <table>
                    <tr>
                        <th>Company</th>
                        <th>Quantity</th>
                    </tr>
                    <tr>
                        <td><Link href="/products/laptops/dell">Dell</Link></td>
                        <td>{data[0].Dell}</td>
                    </tr>
                    <tr>
                        <td><Link href="/products/laptops/hp">HP</Link></td>
                        <td>{data[0].HP}</td>
                    </tr>
                    <tr>
                        <td><Link href="/products/laptops/lenovo">Lenovo</Link></td>
                        <td>{data[0].Lenovo}</td>
                    </tr>
                    <tr>
                        <td><Link href="/products/laptops/macbook">Macbook</Link></td>
                        <td>{data[0].Macbook}</td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default ProductType

export const getServerSideProps: GetServerSideProps = async () => {
    const data: any = await fetch("http://localhost:3000/api/products").then((res) => res.json());
    //console.log('data:', data)

    return {
        props: {
            data: data,
        },
    };
};