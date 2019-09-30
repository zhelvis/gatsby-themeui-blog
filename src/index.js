import React from "react"
import { ThemeProvider, Styled, ColorMode } from "theme-ui"
import theme from "./theme"
import CodeBlock from "./components/code-block/index"

const components = {
  pre: CodeBlock,
}

export const wrapRootElement = ({ element }) => (
  <ThemeProvider components={components} theme={theme}>
    <ColorMode />
    <Styled.root>{element}</Styled.root>
  </ThemeProvider>
)
