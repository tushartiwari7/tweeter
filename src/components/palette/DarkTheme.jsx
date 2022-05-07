import { createTheme } from "@mui/material/styles";

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1da1f2",
    },
    secondary: {
      main: "#d9d9d9",
    },
    background: {
      light: "#242d34",
      dark: "#000000",
    },
  },
});
