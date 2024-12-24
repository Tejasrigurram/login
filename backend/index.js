const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();  // To load environment variables

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Simple route for login (you'll modify this later for actual login functionality)
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  // Ideally, you'd verify the email/password with a database query.
  if (email === 'tej@gmail.com' && password === 'teju2004') {
    res.json({ message: "Login successful" });
  } else {
    res.status(400).json({ message: "Invalid email or password" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.use(cors());

