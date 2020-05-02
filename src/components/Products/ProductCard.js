import React from "react"
import styled from '@emotion/styled'
import { GiBeerBottle, GiCardboardBox, GiMonkey } from 'react-icons/gi'

import Image from "../image"
import { Button } from "../Button"
import "./ProductCard.css"

const ProductCard = ({ flavor }) => {

  return (
    <Container>
        <Image filename={`${flavor}-logo.svg`} alt={`chiimpanzee resting chin on fist with thoughtful expression with ${flavor} in background`} />
        <Column>
          <Button><GiCardboardBox size='2em' /><span>Add to 6-pack</span></Button>
          <Button><GiBeerBottle size='2em' />Add to cart</Button>
          <Button><GiMonkey size='2em' />Join the shrewdness</Button>
        </Column>
    </Container>
  )
}

const Container = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
})

const Column = styled.div({
  alignContent: 'center',
  display: 'grid',
  gridTemplateRows: 'repeat(3, 2rem)',
  gridTemplateColumns: '1fr',
  rowGap: '0.5rem',
})

export default ProductCard
