export async function GET(req, res) {

    // Make a note we are on
    // the api. This goes to the console.
    console.log("in the api page")

  
   // Import necessary modules and set up MongoDB connection
   const { MongoClient } = require('mongodb');
   //const url = 'mongodb://root:example@localhost:27017/';
   const url = 'mongodb+srv://b00148765:qQ6yTAqwcAAly2Xy@app.ojwpkfy.mongodb.net/?retryWrites=true&w=majority&appName=app';
   const client = new MongoClient(url);
   const dbName = 'app'; // database name
  
    // Connect to MongoDB
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('products'); // collection name
  
    // Fetch all documents from the collection
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
  
   
   // Close the MongoDB connection
   await client.close();
  
    
    // at the end of the process we need to send something back
    // Send the fetched documents as a response
    return Response.json(findResult)
  }
  
  