import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FailedPurchasePage = () => (
  <Layout>
    <SEO title="Fail" />
    <h1>You failed :/</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FailedPurchasePage
