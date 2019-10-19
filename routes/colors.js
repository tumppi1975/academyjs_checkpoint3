const express = require('express');
const router = express.Router();
const colormodel = require('../src/colormodel');
const url = require('url');

router.route('')
    .post((req, res) => {
        const color = req.body;
        try {
            colormodel.addColor(color);
            const locurl = url.format({
                protocol: req.protocol,
                host: req.get('host'),
                pathname: req.originalUrl + "/" + color.name
            });
            res.setHeader('Location', locurl);
            res.status(201).send(color);
        } catch (e) {
            res.status(400).send({error: e.message});
        }
    })
;

module.exports = router;
