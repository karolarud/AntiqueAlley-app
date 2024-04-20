'use client';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
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
import {orange } from '@mui/material/colors';


export default function Page() {



  /*
  This function does the actual work
  calling the fetch to get things from the database.
  */ 
  async function runDBCallAsync(url) {


    const res = await fetch(url);
    const data = await res.json();


    if(data.data== "true"){
      console.log("registered")

      
    } else {

      console.log("not registered  ")
    }
  }


  /*

  When the button is clicked, this is the event that is fired.
  The first thing we need to do is prevent the default refresh of the page.
  */
	const handleSubmit = (event) => {
		
		console.log("handling submit");


    event.preventDefault();
  
		const data = new FormData(event.currentTarget);


    let email = data.get('email')
		let pass = data.get('pass')
    let name = data.get('name')
		let dob = data.get('dob')
    let address = data.get('address')
    let phoneNumber = data.get('phoneNumber')
    let secondEmail = data.get('secondEmail')
    let secondPass = data.get('secondPass')
    console.log("Sent email:" + email)
    console.log("Sent pass:" + pass)
    console.log("Sent name:" + name)
    console.log("Sent dob:" + dob)
    console.log("Sent address:" + address)
    console.log("Sent phoneNumber:" + phoneNumber)
    console.log("Sent secondEmail:" + secondEmail)
    console.log("Sent secondPass:" + secondPass)

    runDBCallAsync(`api/register?email=${email}&pass=${pass}&name=${name}&dob=${dob}&address=${address}&phoneNumber=${phoneNumber}&secondEmail=${secondEmail}&secondPass=${secondPass}`)

  }; // end handler




  
  const theme = createTheme({
    palette: {
     
      secondary: {
        main: orange[500],
      },
    },
  });
  



  
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
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
          <Typography component="h1" variant="h5" fontSize= '40px' fontFamily='Garamond'  fontWeight= 'bold'>Register</Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              color="secondary"
              margin="dense"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
               color="secondary"
              margin="dense"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              color="secondary"
              margin="dense"
              required
              fullWidth
              name="pass"
              label="Password"
              type="password"
              id="pass"
              autoComplete="current-password"
            />
            <TextField
              color="secondary"
              margin="dense"
              required
              fullWidth
              name="dob"
              label="Date of Birth"
              type="text"
              id="dob"
              autoComplete=""
            />
            <TextField
              color="secondary"
              margin="dense"
              fullWidth
              name="address"
              label="Address"
              type="text"
              id="address"
              autoComplete=""
            />
            <TextField
              color="secondary"
              margin="dense"
              fullWidth
              name="phoneNumber"
              label="Phone Number"
              type="tel"
              id="phoneNumber"
              autoComplete=""
            />
            <TextField
              color="secondary"
              margin="dense"
              fullWidth
              name="secondEmail"
              label="Second Email Address (for validation)"
              type="email"
              id="secondEmail"
              autoComplete=""
            />
            <TextField
              color="secondary"
              margin="dense"
              fullWidth
              name="secondPass"
              label="Second Password (for validation)"
              type="password"
              id="secondPass"
              autoComplete=""
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              style={{color:"white"}}
              color="secondary"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Register
            </Button>
            <Grid container>
              <Grid item> 
                <Link color="secondary" href="/" variant="body2" >
                  {"Have an account? Sign In"}
                  <br></br>
                </Link>
                <br></br>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}