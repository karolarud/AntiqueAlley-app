export async function GET(req, res) {

    // Make a note we are on
    // the api. This goes to the console.
    console.log("in the removeFromCart api page")
  
  
    // Get the values sent across to us from the request URL parameters
    const { searchParams } = new URL(req.url)
    const pname = searchParams.get('pname')
  
    // Log the received product name
    console.log(pname);
  ;
  
    // Import the required MongoDB client
    const { MongoClient } = require('mongodb');
  
    // MongoDB connection URL
    //const url = 'mongodb://root:example@localhost:27017/';
    const url = 'mongodb+srv://b00148765:qQ6yTAqwcAAly2Xy@app.ojwpkfy.mongodb.net/?retryWrites=true&w=majority&appName=app';
    const client = new MongoClient(url);
    
   
    const dbName = 'app'; // database name
  
    await client.connect();
    console.log('Connected successfully to server');

    // Access the app database
    const db = client.db(dbName);

    // Access the shopping_cart collection
    const collection = db.collection('shopping_cart'); // collection name
  
    // Define the object to be deleted
    var myobj = { pname: pname, username: "sample@test.com"};
   
    // Delete the specified document from the shopping_cart collection
    const deleteResult = await collection.deleteOne(myobj);
    
    // Retrieve documents from the shopping_cart collection after deletion
    const findResult = await collection.find(myobj).toArray();
    console.log('Found documents =>', findResult);
  
  
    // Send a response indicating successful deletion
    return Response.json({ "data":"" + "inserted" + ""})
  }
  
  