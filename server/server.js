import bcrypt from 'bcrypt';
import bodyParser from 'body-parser';
import cors from 'cors';
import './db.js'; 
import express from 'express';
import User from './models/userModel.js';  
import Client from './models/clientModel.js'; 

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json());


app.post('/api/login', async (req, res) => {
  const { userType, email, password } = req.body;

  try {
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Login failed' });
  }
});

app.post('/api/client/register', async (req, res) => {
  const {
    fullName,
    email,
    password,
    phoneNumber,
    dob,
    gender,
    address,
    securityQuestion,
    referralSource,
    termsAccepted,
  } = req.body;

  console.log('Client registration data:', req.body);
  try {

    const existingClient = await Client.findOne({ email });
    if (existingClient) {
      return res.status(400).json({ message: 'Client with this email already exists' });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    
    const newClient = new Client({
      fullName,
      email,
      password: hashedPassword,
      phoneNumber,
      dob,
      gender,
      address,
      securityQuestion,
      referralSource,
      termsAccepted,
    });

  
    const savedClient = await newClient.save();

    res.status(201).json({
      message: 'Client registered successfully',
      client: savedClient,
    });
  } catch (error) {
    console.error('Error during client registration:', error);
    res.status(500).json({ message: 'Failed to register client' });
  }
});
  
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
