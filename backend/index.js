// index.js
const express = require('express');
const dotenv = require('dotenv');
const ragRoute = require('./routes/ragRoute.js');

// Debug: Check if cors is available
try {
  const cors = require('cors');
  console.log('CORS module loaded successfully');
} catch (error) {
  console.error('Failed to load CORS module:', error);
}

const cors = require('cors'); // This should work now after npm install

dotenv.config();

const app = express();

// Add CORS middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.use('/api/rag', ragRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});