import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const mongoURL = 'mongodb://localhost:27017/all-around-rent' 


console.log('MongoDB URL:', mongoURL); 



mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;


db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

export default db;
