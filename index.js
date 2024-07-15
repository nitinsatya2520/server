// index.js (Backend Entry Point)
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const blogPostsRoute = require('./routes/blogPosts');
const db = require('./models/db');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/blogposts', blogPostsRoute); // Mount blog posts routes

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
