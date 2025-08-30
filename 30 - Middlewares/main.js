const express = require('express')
const blog = require('./routes/blog')
const app = express()
const fs = require("fs")
const port = 3000

// app.use(express.static("public"))

app.use('/blog', blog)

// Middleware 1 - Logger for an application

app.use((req, res, next)=> {
  req.author = "Micheal Das"
  console.log(req.headers)
  const now = new Date();  // real Date object
  fs.appendFileSync("logs.txt", `${now.toLocaleString()} is a ${req.method}\n`);
  console.log('m1')
  next()
})

// Middleware 2

app.use((req, res, next)=> {
  console.log('m2')
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World! ' + req.author)
})

app.get('/about', (req, res) => {
  res.send('About!')
})

app.get('/contact', (req, res) => {
  res.send('Contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
