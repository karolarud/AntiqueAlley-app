// api/submitOrder.js

import { MongoClient } from 'mongodb';

// Define the function to handle submitting orders
async function submitOrder(req, res) {
    // Check if the request method is not POST, return Method Not Allowed status
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    // Ensure that cartItems are sent in the body
    const { cart } = req.body; 

    // If cart items are not provided, return Bad Request status
    if (!cart) {
        return res.status(400).json({ message: 'Cart items are required' });
    }
 
    // MongoDB connection URL
    const url = 'mongodb+srv://b00148765:qQ6yTAqwcAAly2Xy@app.ojwpkfy.mongodb.net/?retryWrites=true&w=majority&appName=app';
    const client = new MongoClient(url);
    
    
    try {
        // Connect to the MongoDB server
        await client.connect();
        //Access the app database
        const db = client.db("app");
        // Access the orders collection
        const orders = db.collection("orders");

        // Create a new order object
        const newOrder = {
            items: cart,            // Array of items in the order
            //orderDate: new Date(),  // Current date and time of order placement
            status: 'pending'       // Initial status of the order
        };

        // Insert the new order into the orders collection
        const result = await orders.insertOne(newOrder);

        // Return a success message along with the ID of the newly inserted order
        res.status(201).json({ message: 'Order placed successfully!', orderId: result.insertedId });
    } catch (error) {
        // Handle any errors that occur during the order submission process
        console.error('Failed to submit order:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        // Close the MongoDB client connection
        await client.close();
    }
}

//export default submitOrder;
