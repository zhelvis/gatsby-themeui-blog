import React from "react"
import { MDXProvider } from "@mdx-js/react"

const MyH1 = props => <h1 style={{ color: "red" }} {...props} />

const components = {
  h1: MyH1,
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
