import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      dark: '#240024',
      main: '#AA00AC',
    },
    background: {
      default: '#0F000F',
      paper: '#2E134A',
    },
    mode: 'dark',
    common: {
      black: '#0F000F',
      white: '#fff',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    h1: {
      fontSize: 70,
      fontFamily: 'Montserrat',
      lineHeight: 1.193,
    },
    h2: {
      fontSize: 40,
      fontFamily: 'Montserrat',
      lineHeight: 1.193,
    },
    h3: {
      fontSize: 24,
      lineHeight: 1.23791666667,
    },
		subtitle1: {
			fontFamily: 'Montserrat',
			fontWeight: 400,
			lineHeight: 1.193,
    },
  },
  components: {
    MuiPaper: {
      defaultProps: { elevation: 0 },
    },
    MuiToolbar: {
      defaultProps: { disableGutters: true },
      styleOverrides: {
        root: {
          height: 80,
        },
      },
    },
    MuiContainer: {
      defaultProps: { maxWidth: 'xl' },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: { textTransform: 'none' },
      },
    },
    MuiButton: {
      defaultProps: { variant: 'contained', size: 'large' },
    },
    MuiIconButton: { defaultProps: { size: 'large' } },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          '&:hover': {
            cursor: 'pointer',
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 960, lg: 1200, xl: 1440 },
  },
});

export default responsiveFontSizes(theme, {});
