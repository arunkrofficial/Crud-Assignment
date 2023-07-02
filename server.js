const express = require('express');
const app = express();
const port = 3000; 

app.use(express.json());

const connect = require('./db');

app.post('/register', async (req, res) => {
  try {
    const db = await connect();
    const { name, email, password } = req.body;

  


    const existingUser = await db.collection('users').findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

 
    const newUser = { name, email, password };
    await db.collection('users').insertOne(newUser);

    return res.json({ msg: 'User registered successfully' });
  } catch (error) {
    console.log('Error during registration:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/login', async (req, res) => {
    try {
      const db = await connect();
      const { email, password } = req.body;
  
   
      const user = await db.collection('users').findOne({ email });
      if (!user || user.password !== password) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      return res.json({ msg: 'User login successful' });
    } catch (error) {
      console.log('Error during login:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
