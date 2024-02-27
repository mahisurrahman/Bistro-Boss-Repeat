const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 7000;

//MiddleWare//
app.use(express.json());
app.use(cors())

//cors works//
// {
//     origin: ['http://localhost:5173/'],
//     methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "UPDATE"],
//     credentials: true,
// }

//MongoDB Codes//
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.b4ql9rm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //Collections//
    const menuCollection = client.db('bistroRepeat').collection('menu');
    const cartCollection = client.db('bistroRepeat').collection('carts');
    const userCollection = client.db('bistroRepeat').collection('users');


    //Getting All Menus//
    app.get('/menu', async(req, res)=>{
        const cursor = menuCollection.find();
        const result = await cursor.toArray();
        res.send(result);
    })

    //Posting Single User to DB//
    app.post('/users', async(req, res)=>{
      const user = req.body;
      const result = await userCollection.insertOne(user);
      res.send(result);
    })

    //Get All User Details//
    app.get('/users', async(req, res)=>{
      const users = userCollection.find();
      const result = await users.toArray();
      res.send(result);
    })

    //Posting an item on Cart//
    app.post('/carts', async(req, res)=>{
      const cartItem = req.body;
      const result = await cartCollection.insertOne(cartItem);
      res.send(result);
    })

    //Getting all Cart Items//
    // app.get('/carts', async(req, res)=>{
    //   const carts = cartCollection.find();
    //   const result = await carts.toArray();
    //   res.send(result);
    // })

    //Getting a Single Cart Item //
    app.get('/carts', async(req, res)=>{
      const email = req.query.email;
      const query = {email: email};
      const carts = cartCollection.find(query);
      const result = await carts.toArray();
      res.send(result);
    })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res)=>{
    res.send('Server Running Smoothly');
})

app.listen(port, ()=>{
    console.log(`Server Running on Port ${port}`);
})