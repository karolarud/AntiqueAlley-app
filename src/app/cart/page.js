// Importing necessary React and Material-UI components
'use client';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Container from '@mui/material/Container';
import Snackbar from '@mui/material/Snackbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';


// Defining the main CartPage functional component
export default function CartPage() {

    const [cart, setCart] = useState(null);   // State to store cart items
    const [snackbarOpen, setSnackbarOpen] = useState(false);  // State to handle snackbar visibility
    const [snackbarMessage, setSnackbarMessage] = useState('');  // State to store snackbar messages
  
  function handleRemoveFromCart(pname){

    // Function for removing items from the shopping cart
    console.log("removing from cart: " + pname)  // Log which item is being removed

    // Call API to remove item from cart
    fetch("api/removeFromCart?pname="+pname)
      .then(() => {
        // Refresh the cart if item is successfully removed
        fetchCartItems();
      })
      .catch(error => console.error('Error removing item from cart:', error)); // Log errors if any
    
  }

  

  // Function to fetch the latest cart items from the database collection
  const fetchCartItems = () => {
    fetch('api/getCartItems')
      .then((res) => res.json())
      .then((cart) => {
        // Transform array of items into object with _id as key
        const cartObject = cart.reduce((obj, item) => {
          obj[item._id] = item;
          return obj;
        }, {});
        setCart(cartObject);
      })
      .catch((error) => console.error('Error fetching cart items:', error)); // Log fetch errors
  };

  // Effect hook to fetch cart items on component mount
  useEffect(() => {
    fetchCartItems();
  }, []);

  
  // Return loading message if cart is not yet fetched
  if (!cart) return <p>Loading cart...</p>;

  // Function to handle order submission
  const handleSubmitOrder = () => {
    const orderDetails = {
        items: Object.values(cart), // Extract cart items as an array
       // timestamp: new Date(),  // Attach a timestamp for the order
    };

    // Call API to submit the order
    fetch('api/submitOrder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderDetails),
    })
    .then(res => {
        if (!res.ok) throw new Error('Failed to submit order');
        return res.json();
    })
    .then(data => {
        setSnackbarMessage('Order submitted successfully!');
        setSnackbarOpen(true);
        console.log('Order submitted:', data);
    })
    .catch(error => {
        setSnackbarMessage('Error submitting order.');
        setSnackbarOpen(true);
        console.error('Error submitting order:', error);
    });
};

// Function to handle snackbar close event
const handleCloseSnackbar = (event, reason) => {
  console.log('Snackbar close reason:', reason);
    if (reason === 'clickaway') {
        return;
    }
    setSnackbarOpen(false);
};

  // Define a Material-UI theme
  const theme = createTheme({
    palette: {
      secondary: {
        main: orange[500], // Use orange color for secondary theme
      },
    },
  });

  // Render the component
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
      <div style={{textAlign:'center', paddingTop: '20px'}}> 
        <img src='images/logo2.png' alt="" width={200}  />
      </div>

      <div style={{fontSize: '40px', fontFamily:'Garamond',  fontWeight: 'bold', textAlign:'center', color:'orange', paddingTop: '50px'}} > Shopping Cart
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
              <IconButton onClick={() => handleRemoveFromCart(item.pname)} 
                          variant="outlined" aria-label="Remove from cart"> 
			               Delete
                    <DeleteForeverIcon style={{color:"orange", fontSize: '30px', paddingRight: '6px'}}/> 
              </IconButton>
            </div>
          ))}
          <center>
          <Button color="secondary" 
                  variant="contained" 
                  onClick={handleSubmitOrder} 
                  style={{ fontFamily: 'Garamond', fontWeight: 'bold', textAlign: 'center', marginTop: '20px' }}>
                        Submit Order
          </Button>
          </center>
        </div>
        <Snackbar 
            open={snackbarOpen} 
            autoHideDuration={4000} 
            onClose={handleCloseSnackbar} 
            message={snackbarMessage} 
        />
         
      </Container>
    </ThemeProvider>
  );
}
