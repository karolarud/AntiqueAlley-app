export async function GET(req, res) {

  // Make a note we are on
  // the api. This goes to the console.
  console.log("in the putInCart api page")

  // Extract the product name from the request URL parameters
  // get the values
  // that were sent across to us
  const { searchParams } = new URL(req.url)
  const pname = searchParams.get('pname')

  // Log the extracted product name
  console.log(pname);
;

  // Import the required MongoDB client
  const { MongoClient } = require('mongodb');

  // MongoDB connection URL
  //const url = 'mongodb://root:example@localhost:27017/';
  const url = 'mongodb+srv://b00148765:qQ6yTAqwcAAly2Xy@app.ojwpkfy.mongodb.net/?retryWrites=true&w=majority&appName=app';
  const client = new MongoClient(url);
  
 
  const dbName = 'app'; // database name

  // Connect to the MongoDB server
  await client.connect();
  console.log('Connected successfully to server');

  // Access the app database
  const db = client.db(dbName);

  // Access the shopping_cart collection
  const collection = db.collection('shopping_cart'); // collection name

  // Create an object to insert into the shopping_cart collection
  var myobj = { pname: pname, username: "sample@test.com"};
 
  // Insert the object into the shopping_cart collection
  const insertResult = await collection.insertOne(myobj);

  // Query the database to find the inserted document
  const findResult = await collection.find(myobj).toArray();
  console.log('Found documents =>', findResult);



  // Send a confirmation message as a JSON response
  return Response.json({ "data":"" + "inserted" + ""})
}

