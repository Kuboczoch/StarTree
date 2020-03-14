import { createGlobalStyle } from 'styled-components'
import 'reset-css'
import logo from '../../images/background.png'

const GlobalStyles = createGlobalStyle`
  html {
    background-image: url(${logo})
  }
`

export default GlobalStyles
