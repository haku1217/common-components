import React from 'react'
import { css, Global, keyframes, ThemeProvider as DefaultThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import reset from './reset'

const BASE = {
  flexCol: 16,
  flexMaxWidth: 100,
  flexColGutters: 2
}
export const theme = {
  color: {
    primary: 'red'
  },
  base: {
    size: 8,
    viewport: {
      phone: 768,
      desktop: 769,
      largeDesktop: 1020
    },
    maxWidth: '1200px',
    fontFamily: '"Yu Gothic", "Hiragino Kaku Gothic ProN", Meiryo, Arial, sans-serif',
    fontSize: '62.5%',
    lineHeight: 1.6
  },
  font: {
    size: '1.4rem'
  },
  flex: {
    col: BASE.flexCol,
    maxWidth: BASE.flexMaxWidth,
    gutters: BASE.flexColGutters,
    colWidth: BASE.flexMaxWidth / BASE.flexCol,
    colWidthGutters: (BASE.flexMaxWidth + BASE.flexColGutters) / BASE.flexCol
  }
}
export type ComponentStyleProps = Partial<{
  classes: string[]
  style: { [key: string]: string }
}>

const ThemeProvider: React.FC = ({ children }) => (
  <>
    <Global
      styles={css`
        ${reset}
      `}
    />
    <DefaultThemeProvider theme={theme}>{children}</DefaultThemeProvider>
  </>
)
export { css, keyframes, ThemeProvider }
export default styled
