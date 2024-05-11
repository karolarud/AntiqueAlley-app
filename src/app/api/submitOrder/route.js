// pages/api/submitOrder.js

import { MongoClient } from 'mongodb';

async function submitOrder(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { cart } = req.body; // Ensure that cartItems are sent in the body

    if (!cart) {
        return res.status(400).json({ message: 'Cart items are required' });
    }
 
    const url = 'mongodb+srv://b00148765:qQ6yTAqwcAAly2Xy@app.ojwpkfy.mongodb.net/?retryWrites=true&w=majority&appName=app';
    const client = new MongoClient(url);
    
    
    try {
        await client.connect();
        const db = client.db("app");
        const orders = db.collection("orders");

        // Create a new order object
        const newOrder = {
            items: cart,
            orderDate: new Date(),
            status: 'pending'
        };

        const result = await orders.insertOne(newOrder);

        res.status(201).json({ message: 'Order placed successfully!', orderId: result.insertedId });
    } catch (error) {
        console.error('Failed to submit order:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await client.close();
    }
}

export default submitOrder;
