import { useState, useEffect } from 'react'
import axios from 'axios'

export const useProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products`,
        )
        setProducts(response.data.slice(0, 10))
      } catch (error) {
        console.log(error)
      }
    }

    fetchProducts()
  }, [])

  return { products }
}
