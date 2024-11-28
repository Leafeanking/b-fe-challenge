"use client"
import { createTheme } from "@mui/material/styles";


const theme = createTheme({
  typography: {
    fontFamily: "var(--font-lato)",
    fontSize: 15,
    allVariants: {
      fontFamily: "var(--font-lato)",
    },
  },
  components: {
    MuiFab: {
      styleOverrides: {
        root: {
          height: '48px',
          width: '48px',
          opacity: .5,
        }
      }
    },
    MuiButton: {
        styleOverrides: {
            root: {
                borderRadius: '8px',
                height: '48px',
                textTransform: 'none',
            }
        }
    }
  },
  palette: {
    secondary: {
        main: '#054553',
    }
  },
  cssVariables: true,
});

export default theme;
