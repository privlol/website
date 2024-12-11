const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');

const app = express();
const port = 3000;

// Use Helmet to set various HTTP headers for security
app.use(helmet());

// Enable CORS with proper configuration
app.use(cors({
    origin: ['https://priv.lol', 'http://localhost:3000'], // Add localhost for local testing
    optionsSuccessStatus: 200
}));

// Sanitize user input to prevent injection attacks
app.use(xss());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('I hope you are enjoying this in wayback machine!');
});

// Start the server using HTTP
app.listen(port, () => {
    console.log(`Listening at: http://localhost:${port}`);
});