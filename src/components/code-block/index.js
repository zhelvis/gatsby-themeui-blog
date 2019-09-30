/** @jsx jsx */
import { jsx } from "theme-ui"
import Highlight, { defaultProps } from "prism-react-renderer"
import { useColorMode } from "theme-ui"
import theme from "./theme"

const preToCodeBlock = preProps => {
  if (
    preProps.children &&
    preProps.children.props &&
    preProps.children.props.mdxType === "code"
  ) {
    const {
      children: codeString,
      className = "",
      ...props
    } = preProps.children.props

    const match = className.match(/language-([\0-\uFFFF]*)/)

    return {
      codeString: codeString.trim(),
      className,
      language: match != null ? match[1] : "",
      ...props,
    }
  }
  return undefined
}

const Code = ({ codeString, language, ...props }) => {
  const [colorMode] = useColorMode()

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      theme={colorMode === "default" ? theme.light : theme.dark}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div sx={{
          padding: "1rem",
        }}>
          <pre className={className}>
            <code>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </code>
          </pre>
        </div>
      )}
    </Highlight>
  )
}

export default preProps => {
  const props = preToCodeBlock(preProps)
  if (props) {
    return <Code {...props} />
  }
  return <pre {...preProps} />
}
