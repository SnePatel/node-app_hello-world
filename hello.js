const express = require('express')
const app = express()
const port = 3000
const hostname = '54.177.199.243'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
