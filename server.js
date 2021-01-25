require('dotenv').config(); // loads environment variables from a .env file into process.env

const express = require('express'); // ExperssJS Framework
const app = express(); // Invoke express to variable for use in application

const router = express.Router(); // Invoke the Express Router
const apiRouter = require('./app/routes/router')(router); // Import the application end points/API
app.use('/api', apiRouter); // Assign name to end points

const port = process.env.PORT || 5000; // Set default port or assign a port in enviornment
app.listen(port, () => console.log(`Server started on port ${port}`));