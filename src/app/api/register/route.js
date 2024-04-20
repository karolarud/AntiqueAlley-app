export async function GET(req, res) {

  // Make a note we are on
  // the api. This goes to the console.
  console.log("in the api page")


  // get the values
  // that were sent across to us.
  const { searchParams } = new URL(req.url)
  const email = searchParams.get('email')
  const pass = searchParams.get('pass')
  const name = searchParams.get('name')
  const dob = searchParams.get('dob')
  const address = searchParams.get('address')
  const phoneNumber = searchParams.get('phoneNumber')
  const secondEmail = searchParams.get('secondEmail')
  const secondPass = searchParams.get('secondPass')
  

  console.log(email);
  console.log(pass);
  console.log(name);
  console.log(dob);
  console.log(address);
  console.log(phoneNumber);
  console.log(secondEmail);
  console.log(secondPass);
 
  

 // =================================================
  const { MongoClient } = require('mongodb');

  //const url = 'mongodb://root:example@localhost:27017/';
  const url = 'mongodb+srv://b00148765: qQ6yTAqwcAAly2Xy@app.ojwpkfy.mongodb.net/?retryWrites=true&w=majority&appName=app';
  const client = new MongoClient(url);
  const dbName = 'app'; // database name

  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('login'); // collection name

  
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
  console.log('Found documents =>', findResult);

 let valid=true;


 //==========================================================





  // at the end of the process we need to send something back.
  return Response.json({ "data":"" + valid + ""})
}

