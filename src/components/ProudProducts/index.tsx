'use client'

import Image from 'next/image'

import { Container, ProductCard, Products } from './style'
import { useProducts } from '../../hooks/useProducts'
import { ProudProduct } from '@/types/ProudProduct'

const ProudProducts = () => {
  const { products } = useProducts()
  const productsSliced = products.slice(0, 10)

  return (
    <Container>
      <h1>Produtos que nos orgulhamos</h1>
      <Products>
        {productsSliced.map((item: ProudProduct) => (
          <ProductCard key={item.id}>
            <Image src={item.img} alt="" />
            <p>{item.description}</p>
            <h4>$ {item.price}</h4>
          </ProductCard>
        ))}
      </Products>
    </Container>
  )
}

export default ProudProducts
