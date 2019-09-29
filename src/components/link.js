/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
const StyledLink = ({ ...props }) => (
  <Link
    {...props}
    sx={{
      color: "primary",
      textDecoration: "none",
      ":hover": {
        textDecoration: "underline",
      },
    }}
  />
)
export default StyledLink
