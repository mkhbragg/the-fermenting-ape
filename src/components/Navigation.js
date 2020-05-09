import React from 'react'
import styled from '@emotion/styled'
import { useTabState, Tab, TabList, TabPanel } from 'reakit/Tab'

import About from './About'
import Address from './Address'

const Navigation = () => {
  const tab = useTabState()
  return (
    <>
      <TabList {...tab} aria-label='here you can navigate through the fermenting ape website'>
        <Tab {...tab}>Find your shrewdness</Tab>
        <Tab {...tab}>About the fermenting ape</Tab>
      </TabList>
      <TabPanel {...tab}><Address /></TabPanel>
      <TabPanel {...tab}><About /></TabPanel>
    </>
  )
}

// const Tab = styled(_Tab)({
//   borderBottom: `none`,
//   backgroundColor: `transparent`,
// })

export default Navigation
