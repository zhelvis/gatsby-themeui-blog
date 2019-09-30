export default {
  useCustomProperties: false,
  colors: {
    text: "#121212",
    background: "#fff",
    primary: "#6200ee",
    modes: {
      dark: {
        text: "#fff",
        background: "#121212",
        primary: "#03dac6",
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
