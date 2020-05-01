const express = require('express');
var path = require('path');
const app = express();
const port = 8080
app.use(express.static("client/public"));

app.get('/test', (req, res) => res.send('whatup from the server'));

app.get('/', function (req, res) {
    res.status(200).sendFile(path.join(__dirname, '../client/public', 'index.html'));
    console.log('I tried to send the index.html')
});




app.listen(port, () => console.log(`This server is listening on ${port}`))