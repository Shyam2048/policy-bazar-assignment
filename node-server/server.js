const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// In-memory user database
let users = [];

// Generate a unique user ID
function generateUserId() {
  return Math.random().toString(36).substr(2, 9);
}

// Validate user data
function validateUser(user) {
  if (!user.name || !user.email || !user.password) {
    return false;
  }
  return true;
}

// Create a user
app.post('/users', (req, res) => {
  const userData = req.body;
  
  if (validateUser(userData)) {
    const newUser = {
      id: generateUserId(),
      name: userData.name,
      email: userData.email,
      password: userData.password
    };
    
    users.push(newUser);
    
    res.status(201).json(newUser);
  } else {
    res.status(400).json({ error: 'Invalid user data' });
  }
});

// Get all users with pagination
app.get('/users', (req, res) => {
  const page = parseInt(req.query.page) || 1; 
  const limit = parseInt(req.query.limit) || 10;  
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const results = users.slice(startIndex, endIndex);

  res.status(200).json({
    page: page,
    limit: limit,
    data: results
  });
});

// Update a user
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const userData = req.body;

  const index = users.findIndex(user => user.id === userId);

  if (index !== -1 && validateUser(userData)) {
    users[index] = {
      ...users[index],
      name: userData.name || users[index].name,
      email: userData.email || users[index].email,
      password: userData.password || users[index].password
    };
    
    res.status(200).json(users[index]);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Delete a user
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;

  const index = users.findIndex(user => user.id === userId);

  if (index !== -1) {
    const deletedUser = users[index];
    users.splice(index, 1);
    res.status(200).json(deletedUser);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});


app.listen(3000, () => {
  console.log('Server started on port 3000');
});
