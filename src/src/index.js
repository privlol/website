const express = require('express');
const path = require('path');
const helmet = require('helmet');
const xss = require('xss-clean');

const app = express();
const port = 3000;

app.use(helmet());

app.use(xss());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('I hope you are enjoying this in wayback machine!');
});

app.listen(port, () => {
    console.log(`Listening at: http://localhost:${port}`);
});