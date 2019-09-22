/** @jsx jsx */
import {
  jsx,
  Layout,
  Header,
  Main,
  Footer,
  Container,
  useColorMode,
} from "theme-ui"
import { Link } from "gatsby"
import Button from "./button"

export default props => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Layout>
      <Header>
        <Container
          style={{
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
          }}
        >
          <h1
            sx={{
              color: "primary",
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {props.title}
            </Link>
          </h1>
          <div>
            <Button
              onClick={e => {
                setColorMode(colorMode === "default" ? "dark" : "default")
              }}
              variant="primary"
            >
              Toggle {colorMode === "default" ? "Dark" : "Light"}
            </Button>
          </div>
        </Container>
      </Header>
      <Main>
        <Container>{props.children}</Container>
      </Main>
      <Footer>
        <Container style={{ textAlign: `center` }}>
          © {new Date().getFullYear()}, Built with{" "}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Container>
      </Footer>
    </Layout>
  )
}
