/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import colors from '../shared/css/colors'

import "./reset.css"
import GlobalStyles from '../shared/css/globalStyles'

const Container = styled.div`
  background-color: ${colors.blue};
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`

const Main = styled.main`
  max-width: 960px;
  padding: 100px 30px 0;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyles />
        <Container>
          <Main>{children}</Main>
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
