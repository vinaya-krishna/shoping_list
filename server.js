const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();
app.use(bodyParser.json());

//Database configuration
const db = require('./config/keys').mongoURI;

//connect to the database
mongoose.connect(db , { useNewUrlParser: true })
    .then(()=> console.log("Mongodb connected..."))
    .catch((err)=> console.log(err));

// use routes
app.use('/api/items', items);


const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server started on ${port}`));

