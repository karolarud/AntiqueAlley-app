export async function GET(req, res) {

  // Make a note we are on
  // the api. This goes to the console.
  console.log("in the api page")


  // Get the values sent across to us from the request URL parameters
  const { searchParams } = new URL(req.url)
  const email = searchParams.get('email')
  const pass = searchParams.get('pass')
  const name = searchParams.get('name')
  const dob = searchParams.get('dob')
  const address = searchParams.get('address')
  const phoneNumber = searchParams.get('phoneNumber')
  const secondEmail = searchParams.get('secondEmail')
  const secondPass = searchParams.get('secondPass')
  
  // Log the received values
  console.log(email);
  console.log(pass);
  console.log(name);
  console.log(dob);
  console.log(address);
  console.log(phoneNumber);
  console.log(secondEmail);
  console.log(secondPass);
 
  

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

  // Access the login collection
  const collection = db.collection('login'); // collection name

  // Insert user details into the login collection
  const findResult = await collection.insertOne({ 
    "username": email, 
    "email": email,
    "pass": pass, 
    "name": name,
    "dob": dob,
    "address": address,
    "phoneNumber": phoneNumber,
    "secondEmail": secondEmail,
    "secondPass": secondPass
  });
  // Log the insertion result
  console.log('Found documents =>', findResult);

  // Set the validation flag to true
 let valid=true;



  // Send the validation flag as a JSON response
  return Response.json({ "data":"" + valid + ""})
}

