// db.js

const mongoose = require('mongoose');

// Function to establish database connection
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Attendence_Management_System");
        console.log("Connection established");
    } catch (error) {
        console.error("An Error occurred:\n", error);
    }
};

// Export the connectDB function
module.exports = connectDB;
