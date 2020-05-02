import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Products from "../components/Products"

const IndexPage = () => (
  <Layout style={{backgroundColor: '#EEF2F7'}}>
    <SEO title="Home" />
    <Products />
    <Image filename='generic-logo.svg' alt='chiimpanzee resting chin on fist with thoughtful expression' />
  </Layout>
)

export default IndexPage
