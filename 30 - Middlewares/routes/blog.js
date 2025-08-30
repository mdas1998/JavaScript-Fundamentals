const express = require('express')
const app = express()
const router = express.Router()

// Middleware - Specific to blog routes

app.use((req, res, next)=> {
  req.author = "Micheal Das"
  console.log(req.headers)
  const now = new Date();  // real Date object
  fs.appendFileSync("logs.txt", `${now.toLocaleString()} is a ${req.method}\n`);
  console.log('m1')
  next()
})

// define the home page route
router.get('/', (req, res) => {
  res.send('Blog home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About blog')
})

// define the about blog post
router.get('/blogpost/:slug', (req, res) => {
  res.send(`Fetch the blog post for ${req.params.slug}`)
})


module.exports = router
