const express = require('express');
const PodcastModel = require('../models/Podcast.model');

// require the Podcast model here
const Podcast = require('../models/Podcast.model')

const router = express.Router();

router.get('/', (req, res, next) => {
    Podcast.find().then((podcastsFromDB) => {
        console.log(podcastsFromDB)
        res.render('podcasts/all-podcasts', { allThepodcasts: podcastsFromDB })
    })
});


router.get('/new', (req, res, next) => {
    res.render('podcasts/new-Podcast')
});

router.post('/new', (req, res, next) => {
    console.log(req.body);
    Podcast.create({ title: req.body.title, plot: req.body.plot, genre: req.body.genre }).then(() => {
        res.redirect('/')
    })
});

router.get('/:id', (req, res, next) => {
    Podcast.findById(req.params.id).then((Podcast) => {
        console.log(Podcast)
        res.render('podcasts/show-Podcast', Podcast)
    })
});

router.post('/:id/delete', (req, res, next) => {
    Podcast.findByIdAndRemove(req.params.id).then(() => {
        res.redirect('/podcasts')
    })
});

module.exports = router;