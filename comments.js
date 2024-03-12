// Create web server using express
// Create a new router using express
// Define a route to handle comments
// Use the router in the web server
// Start the web server
const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Comments route');
});

app.use('/comments', router);

app.listen(3000, () => {
  console.log('Web server is running on http://localhost:3000');
});