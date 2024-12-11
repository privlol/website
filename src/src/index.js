const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome, we currently are working on setting up our website, please check back later.');
});

app.listen(port, () => {
    console.log(`Listening at: http://localhost:${port}`);
});