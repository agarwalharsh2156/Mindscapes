const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // You can choose a different port

// Serve static files (like your HTML) from the current directory
app.use(express.static(path.join(__dirname)));

// Define a route to serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});