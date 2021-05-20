const express = require('express')

const app = express()

app.listen(3003)

app.get('/', (req, res) => {
  res.send(
    '<h2>GitHub - <a href="https://github.com/nrjdalal" style="color: black; text-decoration: none;">@nrjdalal</a></h2>'
  )
})
