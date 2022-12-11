import React, { useEffect, useState } from 'react'
import styles from'../styles/product.module.css'

const Products = () => {
    const [ allProduct , setProduct ]=useState([])
    const [ loading , setloading ]=useState(false)

    const callAPI = async () => {
		try {
            setloading(true)
			const res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`);
			const data = await res.json();
			console.log(data.data);
            setProduct(data.data)
            setloading(false)
		} catch (err) {
			console.log(err);
		}
	};
    useEffect(()=>{
        callAPI()
    },[])

    return (
        <>
        <h1>Product Page</h1>
    {loading?<h1>Loading.....</h1>:
        <div className={styles.productContainer}>
      {
        allProduct.map((item)=>{
            return(
            <div className={styles.productImage}  key={item.image} >
               <img src={item.image} alt={item.brand} />
                <h3>{item.brand}</h3>
            </div>
            )
        })
      }
    </div>
    }
      </>
  )
}

export default Products
