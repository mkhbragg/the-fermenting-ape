import React from "react"
import styled from '@emotion/styled'
import { RiCalendar2Line, RiCalendarEventLine, RiCalendarTodoLine } from 'react-icons/ri'

import { Button } from './Button'

const Frequency = ({ }) => {

  return (
    <Container>
      <h2>How often would you like it?</h2>
      <Grid cols={3}>
        <Button style={{padding: `2rem`}} noBorder><RiCalendar2Line size='4em' />Weekly</Button>
        <Button style={{padding: `2rem`}} noBorder><RiCalendarTodoLine size='4em' />Every other week</Button>
        <Button style={{padding: `2rem`}} noBorder><RiCalendarEventLine size='4em' />Monthly</Button>
      </Grid>
    </Container>
  )
}

const Container = styled.div({
  margin: `4rem 0`,
})

const Grid = styled.div(props => ({
  alignItems: `center`,
  display: `grid`,
  gridColumnGap: `1rem`,
  gridTemplateColumns: `repeat(${props.cols}, auto)`,
}))

export default Frequency
