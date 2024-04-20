'use client';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

export default function CartPage() {
  
  function handleRemoveFromCart(pname){

    // function for removing items from the shopping cart
    console.log("removing from cart: " + pname)
    fetch("http://localhost:3000/api/removeFromCart?pname="+pname)
      .then(() => {
        // Refresh the cart after removal
        fetchCartItems();
      })
      .catch(error => console.error('Error removing item from cart:', error));
    
  }

  const [cart, setCart] = useState(null);

  // Function to fetch cart items from the database collection
  const fetchCartItems = () => {
    fetch('http://localhost:3000/api/getCartItems')
      .then((res) => res.json())
      .then((cart) => {
        // Transform array of items into object with _id as key
        const cartObject = cart.reduce((obj, item) => {
          obj[item._id] = item;
          return obj;
        }, {});
        setCart(cartObject);
      })
      .catch((error) => console.error('Error fetching cart items:', error));
  };

  // Fetch cart items on component mount
  useEffect(() => {
    fetchCartItems();
  }, []);

  

  // Return loading message if cart is not yet fetched
  if (!cart) return <p>Loading cart...</p>;

  // Create a MUI theme
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
      <div style={{fontSize: '40px', fontFamily:'Garamond',  fontWeight: 'bold', textAlign:'center', color:'orange', paddingTop: '20px'}} > Shopping Cart
      <div style={{float:'right'}}> 
	<IconButton href='/' variant="outlined" aria-label="logout" >
		<LogoutIcon  style={{color:"orange", fontSize: '40px'}} />
		</IconButton>
    </div>
	</div>
  <br></br>
  <div style={{float:'right'}}> 
	<IconButton href='dashboard' variant="outlined" aria-label="dashboard" >
		<HomeIcon style={{color:"orange", fontSize: '40px'}}/>
		</IconButton>
	</div>
        <div style={{paddingTop: '40px'}}>
          {Object.values(cart).map((item) => (
            <div style={{ padding: '20px',  textAlign:'center' }} key={item._id}>
              Unique ID: {item._id} 
              <br></br>
              Product Name: <strong>{item.pname}</strong>
              <br></br>
              <IconButton onClick={() => handleRemoveFromCart(item.pname)} variant="outlined" aria-label="Remove from cart"> 
			               Delete
                    <DeleteForeverIcon style={{color:"orange", fontSize: '30px', paddingRight: '6px'}}/> 
              </IconButton>
            </div>
          ))}
        </div>
      </Container>
    </ThemeProvider>
  );
}
