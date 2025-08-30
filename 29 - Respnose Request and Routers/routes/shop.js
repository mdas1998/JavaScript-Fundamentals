const express = require('express')
const router = express.Router()



// define the home page route
router.get('/', (req, res) => {
  res.send('Shop home page')
})
// define the about route
router.get('/men', (req, res) => {
  res.send("Men's shopping page")
})
router.get('/women', (req, res) => {
  res.send("Women's shopping page")
})

// define the about blog post
router.get('/mens-wear/:slug', (req, res) => {
  res.send(`Fetch the men's wear for ${req.params.slug}`)
})

router.get('/womens-wear/:slug', (req, res) => {
  res.send(`Fetch the women's wear for ${req.params.slug}`)
})


module.exports = router
