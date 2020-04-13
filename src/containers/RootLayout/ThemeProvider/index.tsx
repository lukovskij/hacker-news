import React, { ReactNode } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider as UIThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

type Props = {
  children: ReactNode
}
export default function ThemeProvider(props: Props) {
  return (
    <UIThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </UIThemeProvider>
  )
}
