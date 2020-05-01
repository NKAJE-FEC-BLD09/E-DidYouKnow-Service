const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Halla-loo-yer'))

app.listen(port, () => console.log(`This server is listening on ${port}`))