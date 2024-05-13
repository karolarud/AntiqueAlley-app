export async function GET(req, res) {

  // Make a note we are on
  // the api. This goes to the console.
  console.log("in the api page")

  // Extract email and password from request URL parameters
  // get the values
  // that were sent across to us
  const { searchParams } = new URL(req.url)
  const email = searchParams.get('email')
  const pass = searchParams.get('pass')

  // Log the extracted email and password
  console.log(email);
  console.log(pass);
  

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
  const collection = db.collection('login'); // collection name

  // Query the database to find a document with the specified email
  const findResult = await collection.find({"username": email}).toArray();
  console.log('Found documents =>', findResult);

  let valid = false
  // Check if any document is found
  if(findResult.length >0 ){
      valid = true;
      console.log("login valid")
  } else {

    valid = false;
    console.log("login invalid")
  }


 //==========================================================



  // Send the validity of the login credentials as a JSON response
  return Response.json({ "data":"" + valid + ""})
}


