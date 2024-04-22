'use client';
import * as React from 'react';
//import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import {ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { orange} from '@mui/material/colors';
import { useState, useEffect } from 'react';



export default function Page() {


  //
  // function for putting items into the shopping cart.
  //
  function putInCart(pname){

	console.log("putting in cart: " + pname)

	fetch("api/putInCart?pname="+pname);
 
  }

  const [data, setData] = useState(null)
  const [weather, setWeatherData] = useState(0)

 
  useEffect(() => {
	fetch('api/getProducts')
  	.then((res) => res.json())
  	.then((data) => {
    	setData(data)
  	})

	  fetch('api/getWeather')
      .then((res) => res.json())
      .then((weather) => {
        setWeatherData(weather)
      })

  }, [])
 

  if (!data) return <p>No data</p>


 
  const theme = createTheme({
	palette: {
	 
  	secondary: {
    	main: orange[500],
  	},
	},
  });
 


  if (!weather) return <p>No weather</p>
 
  return (
	<ThemeProvider theme={theme}>
		<strong>Today's temperature: {JSON.stringify(weather.temp)}</strong>
	<Container component="main"  maxWidth="xs">
 
   	<div style={{fontSize: '40px', fontFamily:'Garamond',  fontWeight: 'bold', textAlign:'center', color:'orange', paddingTop: '20px'}} > Hello User! 
		<div style={{float:'right'}}> 
	<IconButton href='/' variant="outlined" aria-label="logout" >
		<LogoutIcon  style={{color:"orange", fontSize: '40px'}} />
		</IconButton>
		</div>
	</div>
	<br></br>

	<div style={{float:'right'}}> 
	<IconButton href='cart' variant="outlined" aria-label="shopping cart" >
		<ShoppingCartIcon style={{color:"orange", fontSize: '40px'}}/>
		</IconButton>
	</div>
	<center>
	<div>
		<TextField 
		  color="secondary"
		  margin="dense"
          id="filled-helperText"
          label="Search products"
	      variant="filled"
		  //fullWidth
		    
        />
		
	</div>
	</center>
    	<div style={{paddingTop: '40px'}}>
  	{
    	data.map((item, i) => (
      	<div style={{padding: '15px', textAlign:'center'}} key={i} >
			<br></br>
        	Unique ID: {item._id} 
        	<br></br>
        	<strong>{item.pname} -  {item.price}</strong>
        	<br></br>
        	<IconButton  onClick={() => putInCart(item.pname)}  variant="outlined" aria-label="Add to cart"> 
			Add to cart 
			<AddShoppingCartIcon style={{color:"orange", fontSize: '30px', paddingRight: '6px'}}/> 
			</IconButton>
			
      	</div>
    	))
  	}
	</div>

	</Container>

	</ThemeProvider>

  );
}





