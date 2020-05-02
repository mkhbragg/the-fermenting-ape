import React from "react"
import styled from '@emotion/styled'

import ProductCard from "./Products/ProductCard"

const Products = ({ }) => {

  return (
    <ProductList>
        <ProductCard flavor='apple' />
        <ProductCard flavor='ginger' />
        <ProductCard flavor='pomegranate' />
        <ProductCard flavor='lavender' />
    </ProductList>
  )
}

const ProductList = styled.div({
  display: `grid`,
  gridGap: `3rem`,
  gridTemplateColumns: `repeat(auto-fit, minmax(350px, 1fr))`
})

export default Products
