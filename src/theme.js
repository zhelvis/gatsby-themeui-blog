export default {
  useCustomProperties: false,
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#07c",
    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        primary: "#0cf",
      },
    },
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit",
  },
  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      bg: "background",
    },
    a: {
      color: "primary",
      textDecoration: "none",
      ":hover": {
        textDecoration: "underline",
      },
    },
  },
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
    },
  },
}
