import React from 'react';
import LanguageSelector from './components/LanguageSelector';
import AstrologyForm from './components/AstrologyForm';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, Box, Container, CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#673ab7', // Custom purple
    },
    secondary: {
      main: '#ff9800', // Custom orange
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="sticky" color="primary" enableColorOnDark sx={{ background: 'rgba(103,58,183,0.85)', boxShadow: 'none', backdropFilter: 'blur(8px)' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Vedic Astrology
          </Typography>
          <Box sx={{ minWidth: 250 }}>
            <LanguageSelector />
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{
        minHeight: '100vh',
        position: 'relative',
        background: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat fixed`,
        pb: 4,
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(40, 20, 60, 0.75)',
          zIndex: 0,
        },
      }}>
        <Container maxWidth="lg" sx={{ py: 4, position: 'relative', zIndex: 1 }}>
          <AstrologyForm />
        </Container>
        <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: 2, mt: 4, textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Vedic Astrology App. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
