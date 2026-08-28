// for localhost
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const path = require('path'); 
// require('dotenv').config({ path: path.resolve(__dirname, '.env') }); 

// const app = express();

// app.use(cors()); 
// app.use(express.json());

// async function connectDB() {
//     try {
//         await mongoose.connect(process.env.MONGO_URI);
//         console.log("Mongoose is connected!");
//     } catch (error) {
//         console.log("MongoDB connection failed:");
//         console.log(error);
//     }
// }

// connectDB();

// app.use('/', require('./routes/Employee'));


// app.listen(3000, () => { 
//     console.log("Server running on port 3000");
// });


// for vercel
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

let isConnected = false;

async function connectDB() {
    if (isConnected) {
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI);
        isConnected = true;

        console.log("Mongoose is connected!");
    } catch (error) {
        console.error("MongoDB connection failed:");
        console.error(error);

        throw error;
    }
}

app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (error) {
        res.status(500).json({
            error: "Database connection failed"
        });
    }
});

app.use("/", require("./routes/Employee"));

app.get("/", (req, res) => {
    res.json({
        message: "Meridian Studio backend is running"
    });
});

module.exports = app;