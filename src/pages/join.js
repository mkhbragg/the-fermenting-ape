import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CartPage = () => (
  <Layout>
    <SEO title="Cart" />
    <h1>Cart</h1>
    <p>These are the contents of my cart</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CartPage
