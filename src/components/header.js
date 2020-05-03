import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from '@emotion/styled'

const Header = ({ siteTitle }) => (
  <HeaderView>
    <Content>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#222222`,
            textDecoration: `none`,
            fontFamily: `AveriaSerif`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </Content>
  </HeaderView>
)

const Content = styled.div({
  alignItems: `center`,
  display: `grid`,
  gridTemplateColumns: `auto 6rem`,
  margin: `0 auto`,
  maxWidth: 1400,
  padding: `1.45rem 1.0875rem`,
})

const HeaderView = styled.header({
  background: `transparent`,
  marginBottom: `1.45rem`
})

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
