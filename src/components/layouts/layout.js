import React from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './globalStyles'

const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  }
}

const Layout = (props) => (
  <>
    <Helmet
      title='StarTree'
      meta={[{
        name: 'description',
        content: 'StarTree Website'
      }, {
        name: 'charSet',
        content: 'utf-8'
      }]}
    />
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {props.children}
    </ThemeProvider>
  </>
)

export default Layout
