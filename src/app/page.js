'use client';
import * as React from 'react';
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
import {ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';


// Define a functional component that handles user login
export default function Page() {

  /*
  This function does the actual work
  calling the fetch to get things from the database.
  This function performs the API call to authenticate the user.
  */ 
  async function runDBCallAsync(url) {


    const res = await fetch(url);
    const data = await res.json();

  // Check if the login is valid and log the result
    if(data.data== "valid"){
      console.log("login is valid!")

      
    } else {

      console.log("not valid  ")
    }
  }


  /*
  Handle the form submission event.
  When the button is clicked, this is the event that is fired.
  The first thing we need to do is prevent the default refresh of the page.
  */
	const handleSubmit = (event) => {
		
		console.log("handling submit");

    event.preventDefault(); // Prevent default form submission behavior
  
		const data = new FormData(event.currentTarget);


    let email = data.get('email')
		let pass = data.get('pass')

    console.log("Sent email:" + email)
    console.log("Sent pass:" + pass)

    // Perform the login operation
    runDBCallAsync(`api/login?email=${email}&pass=${pass}`)


  }; // end handler




  // Create a theme instance to customize Material-UI components
  const theme = createTheme({
    palette: {
     
      secondary: {
        main: orange[500], // Using orange color for secondary palette
      },
    },
  });
  



  // Render the login form and page layout
  return (
    
    <ThemeProvider theme={theme}>
      
    <Container component="main"  maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      > <div className='app'>
        
        <img src='images/logo.png' alt="" width={250}  />
        
        </div>
        
        <br></br>
        <Typography component="h1" variant="h5" fontSize= '40px' fontFamily='Garamond'  fontWeight= 'bold'>
          Log In
        </Typography>
        <br></br>
        <div>Hi there! Nice to see you again.</div>
        
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <br></br>
          <TextField
            color="secondary"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
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
            type="pass"
            id="pass"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <br></br>
          <Button color="secondary" style={{fontFamily:'Garamond',  fontWeight: 'bold', textAlign:'center', color:"white"}}
          Log In
          Link href="dashboard"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign in
          </Button>




          <Grid container>
            <Grid item xs>
              <br></br>
              <Link color="secondary" href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
            <br></br>
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