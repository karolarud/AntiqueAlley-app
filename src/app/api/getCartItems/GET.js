export async function GET(req, res) {
  try {
    // Make a note we are on the api. This goes to the console.
    console.log("in the getCartItems api page");

    // Connect to MongoDB
    const { MongoClient } = require('mongodb');
    //const url = 'mongodb://root:example@localhost:27017/';
    const url = 'mongodb+srv://b00148765: qQ6yTAqwcAAly2Xy@app.ojwpkfy.mongodb.net/?retryWrites=true&w=majority';
    const client = new MongoClient(url);
    const dbName = 'app';

    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('shopping_cart');

    // Query the shopping_cart collection to get all items
    const cartItems = await collection.find({}).toArray();

    // Send the cart items as JSON response
    res.json(cartItems);
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
