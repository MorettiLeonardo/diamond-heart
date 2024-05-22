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
<<<<<<< HEAD
        setProducts(response.data)
=======
        setProducts(response.data.slice(0, 10))
>>>>>>> eeb0d4ba1d2df0bb162a0e628402be87fdaf50b6
      } catch (error) {
        console.log(error)
      }
    }

    fetchProducts()
  }, [])

  return { products }
}
