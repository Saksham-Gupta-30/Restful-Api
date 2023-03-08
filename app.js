const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');
const connectDB = require('./db/connect.js');
const postRoutes = require('./routes/posts.js');

const app = express();

const PORT = process.env.PORT || 7000;

// MIDDLEWARE

app.use(bodyParser.json());
app.use(cors());

// app.use('/', (req, res) => {
//     console.log('This is a middleware');
// })

//ROUTES
app.get('/', (req, res) => {
    res.send('This is home route');
    console.log('This is a home route');
});

// POST ROUTES
app.use('/posts', postRoutes);

// Connect to DataBase
try {
    connectDB();
    console.log('Connected to DB');
} catch (error) {
    console.log(error);
}

// Listen to the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})