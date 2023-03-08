const mongoose = require('mongoose');

uri = process.env.DB_CONNECTION;

const connectDB = () => {
    return mongoose.connect(uri, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    });
}

module.exports = connectDB;