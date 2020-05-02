import React from "react"
import styled from '@emotion/styled'
import { GiBeerBottle, GiCardboardBox } from 'react-icons/gi'

import Image from "../image"
import { Button } from "../Button"
import "./ProductCard.css"

const ProductCard = ({ flavor }) => {

  return (
    <Container>
        {/* <Image filename={`${flavor}-logo.svg`} alt={`chiimpanzee resting chin on fist with thoughtful expression with ${flavor} in background`} /> */}
        <h3>{flavor}</h3>
        <Column>
          <Button grid><GiCardboardBox size='2em' />Add to 6-pack</Button>
          <Button grid><GiBeerBottle size='2em' />Add to cart</Button>
          <Box>
            <Grid>
              <Select id="membership-frequency">
                <option value="">join the shrewdness</option>
                <option value="weekly">Weekly</option>
                <option value="biweekly">Bi-weekly</option>
                <option value="monthly">Monthly</option>
              </Select>
              <Button>Add to cart</Button>
            </Grid>
          </Box>
        </Column>
    </Container>
  )
}

const Box = styled.div({
  // border: `1px solid rgba(34, 34, 34, 0.2)`,
  padding: `0.75rem`,
})

const Container = styled.div({
  display: 'grid',
  gridTemplateColumns: 'auto',
  backgroundColor: `white`,
  boxShadow: `0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06)`,
  padding: `2rem`,
})

const Column = styled.div({
  alignContent: 'center',
  display: 'grid',
  gridTemplateRows: 'repeat(3, auto)',
  gridTemplateColumns: '1fr',
  rowGap: '1rem',
})

const Grid = styled.div({
  display: `grid`,
  gridRowGap: `0.5rem`,
  gridTemplateRows: `repeat(2, auto)`,
})

const Label = styled.label({
  fontFamily: 'AveriaSans'
})

const Select = styled.select({
  ['-webkit-appearance']: `none`,
  ['-moz-appearance']: `none`,
  background: `transparent`,
  backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")`,
  backgroundRepeat: `no-repeat`,
  backgroundPositionX: `100%`,
  backgroundPositionY: `50%`,
  border: `none`,
  backgroundColor: `transparent`,
  fontFamily: `AveriaSans`,
  fontWeight: `700`,
  marginRight: `2rem`,
  padding: `1rem`,
  paddingRight: `2rem`,
})

export default ProductCard
