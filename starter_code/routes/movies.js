const express = require('express');
const router  = express.Router();
const Movie     = require('../models/movie');


/* GET movies page */
router.get('/movies', (req, res, next) => {

  Movie.find({},{title:1, image:1})  
    .then((movies) => {
        res.render('movies', {movies: movies})
      })
});

module.exports = router;
