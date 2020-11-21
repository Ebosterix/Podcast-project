const express = require('express');
// "host" replaces "celebrity"
const hostModel = require('../models/host.model');

// require the host model here
const host = require('../models/host.model')

const router = express.Router();

router.get('/', (req, res, next) => {
    host.find().then((hostsFromDB) => {
        console.log(hostsFromDB)
        res.render('hosts/index', { allThehosts: hostsFromDB })
    })
});

router.get('/new', (req, res, next) => {
    res.render('hosts/new')
});

router.get('/:id', (req, res, next) => {
    host.findById(req.params.id).then((host) => {
        console.log(host)
        res.render('hosts/show', host)
    })
});

router.post('/new', (req, res, next) => {
    console.log(req.body);
    host.create({ name: req.body.name, occupation: req.body.occupation, catchPhrase: req.body.catchPhrase }).then(() => {
        res.redirect('/')
    })
});


router.post('/:id/delete', (req, res, next) => {
    host.findByIdAndRemove(req.params.id).then(() => {
        res.redirect('/hosts')
    })
});


module.exports = router;

