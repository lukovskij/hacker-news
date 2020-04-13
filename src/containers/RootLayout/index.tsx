import React, { ReactNode } from 'react'
import StoreProvider from './StoreProvider'
import ThemeProvider from './ThemeProvider'

type Props = {
  children: ReactNode
}
export default function RootLayout(props: Props) {
  return (
    <StoreProvider>
      <ThemeProvider>{props.children}</ThemeProvider>
    </StoreProvider>
  )
}
