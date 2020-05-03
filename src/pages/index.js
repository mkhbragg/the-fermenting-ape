import React from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'
import { GrCircleInformation } from 'react-icons/gr'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Products from "../components/Products"
import Frequency from "../components/Frequency"
import { Button, SubmitButton } from '../components/Button'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Centered>
      <Form>
        <Grid cols={2}>
          <LinkView to="/join/"><SubmitButton type="submit" filled big value='Join the shrewdness'></SubmitButton></LinkView>
          <Button noBorder><GrCircleInformation size='2em' alt="what's a shrewdness?" title="what's a shrewdness?" /></Button>
        </Grid>
      </Form>
    </Centered>
    <Container>
      <Products />
      <Frequency />
      <Centered>
        <Link to="/join/"><Button filled big>Join the shrewdness</Button></Link>
      </Centered>
    </Container>
    <Image filename='generic-logo.svg' alt='chiimpanzee resting chin on fist with thoughtful expression' />
  </Layout>
)

const Centered = styled.div({
  display: 'grid',
  justifyContent: 'center',
  justifyItems: `center`,
  padding: '4rem 0 6rem 0',
})

const Container = styled.div({
  backgroundColor: `white`,
  borderRadius: `5px`,
  boxShadow: `0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06)`,
  padding: `4rem`,
})

const Form = styled.form({
  fontFamily: `AveriaSans`,
  textAlign: 'center',
})

const Grid = styled.div(props => ({
  alignItems: `center`,
  display: `grid`,
  gridColumnGap: `1rem`,
  gridTemplateColumns: `repeat(${props.cols}, auto)`,
}))

const LinkView = styled(Link)({
  textDecoration: `none`,
})

export default IndexPage
