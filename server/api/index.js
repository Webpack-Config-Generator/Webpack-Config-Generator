const express = require('express');
const router = express.Router();

const path = require('path');

const { generateConfiguration, generateFile } = require('../configurator');

/*
  Note: All routes here are set with /api/ as their base,
    i.e. the route is /api/ping
*/

//  /api/ping
router.get('/ping', (_, res) => res.status(200).send({ ping: 'ok' }));

//  /api/configurator/create
router.post('/configurator/create', generateConfiguration, (req, res) => {
  res.status(200).json(res.locals.configuration);
});

//  /api/configurator/download
router.get('/configurator/download', generateFile);

module.exports = router;
