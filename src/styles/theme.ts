import { extendTheme } from "@chakra-ui/react";

const colors = {
  black: "#000",
  red: "#CB0D1F",
  redHover: "#e00d22",
  lightBlue: "#00A8A9",
  lightBlueHover: "#00c1c2",
  lightBlueActive: "#00d0d1",
  darkBlue: "#1E2B50",
  orange: "#F26324",
};

const fonts = {
  heading: "Open Sans",
  body: "Open Sans",
  mono: "Open Sans",
};

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "1024px",
  xl: "1440px",
  "2xl": "1920px",
};

const styles = {
  global: {
    "*": {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
    },
    "html, body, #root": {
      width: "100%",
      height: "100%",
    },
  },
};

export const theme = extendTheme({
  colors,
  fonts,
  breakpoints,
  styles,
});
