import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SucceededPurchasePage = () => (
  <Layout>
    <SEO title="Success" />
    <h1>You succeeded!</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SucceededPurchasePage
