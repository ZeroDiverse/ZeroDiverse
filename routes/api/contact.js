const express = require('express');
const router = express.Router();
const sendMail = require('./../../helpers/sendMail');


/* GET users listing. */
router.post('/', sendMail);

/* GET users listing. */
router.post('/collab', function (req, res, next) {

});

module.exports = router;
