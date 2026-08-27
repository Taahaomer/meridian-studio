const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); 
require('dotenv').config({ path: path.resolve(__dirname, '.env') }); 

const app = express();

app.use(cors()); 
app.use(express.json());

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongoose is connected!");
    } catch (error) {
        console.log("MongoDB connection failed:");
        console.log(error);
    }
}

connectDB();

app.use('/', require('./routes/Employee'));


app.listen(3000, () => { 
    console.log("Server running on port 3000");
});