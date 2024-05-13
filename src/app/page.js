'use client';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import FormControl from '@mui/material/FormControl';
import Alert from '@mui/material/Alert'; // Import Alert for displaying messages

export default function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(''); // State to hold the error message

  async function runDBCallAsync(email, pass) {
    if (!email || !pass) { // Check if email or password is empty
      setError("Please enter both email and password.");
      return;
    }
    try {
      const res = await fetch(`api/login?email=${email}&pass=${pass}`);
      const data = await res.json();
      if (data.data === "true") {
        setIsLoggedIn(true);
      } else {
        setError("Login not valid. Please check your credentials."); // Set error for invalid login
      }
    } catch (error) {
      console.error('API call failed:', error);
      setError('Failed to connect to the server. Please try again.'); // Set error for server issues
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email').trim();
    const pass = data.get('pass').trim();
    runDBCallAsync(email, pass);
  };

  useEffect(() => {
    if (isLoggedIn) {
      window.location.href = '/dashboard';
    }
  }, [isLoggedIn]);

  const theme = createTheme({
    palette: {
      secondary: {
        main: orange[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        > 
        <Box className='app'>
          <img src='images/logo.png' alt="" width={250} />
        </Box>
        <br></br>
        <Typography component="h1" variant="h5" fontSize='40px' fontFamily='Garamond' fontWeight='bold'>
          Log In
        </Typography>
        <div>Hi there! Nice to see you again.</div>
        
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{width: '100%', mt: 2 }}>
          <FormControl fullWidth>
            <TextField
              color="secondary"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              type="email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              color="secondary"
              margin="normal"
              required
              fullWidth
              name="pass"
              label="Password"
              type="password"
              id="pass"
              autoComplete="current-password"
            />
          </FormControl>
          {error && <Alert severity="error" sx={{ width: '100%', mt: 2 }}>{error}</Alert>} {/* Display error message */}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            color="secondary"
            style={{ fontFamily: 'Garamond', fontWeight: 'bold', color: "white" }}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign in
          </Button>

          <Grid container>
            <Grid item xs>
              <Link color="secondary" href="#" variant="body2">
                {"Forgot password?"}
              </Link>
            </Grid>
            <Grid item>
              <Link color="secondary" href="register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
