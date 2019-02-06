const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/test', (req, res) => {
    res.send('Hello World test')
})

app.listen(8080, () => {
    console.log("Blog App listening on port 8080!")
})
