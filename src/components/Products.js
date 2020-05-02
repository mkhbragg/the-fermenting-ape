import React from "react"
import ProductCard from "./Products/ProductCard"

const Products = ({ }) => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <ProductCard flavor='apple' />
        <ProductCard flavor='ginger' />
        <ProductCard flavor='pomegranate' />
        <ProductCard flavor='lavender' />
    </div>
  )
}

export default Products
