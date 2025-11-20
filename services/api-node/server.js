const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Node.js service running!' });
});

app.listen(3000, () => console.log('Node service on port 3000'));