var express = require('express');
var router = express.Router();
const { Deta } = require('deta');
const deta = Deta();
const db = deta.Base('log-conf');

/* GET users listing. */
router.get('/v1/conf/status', function (req, res, next) {
    try {
        db.put(req, "status");
        var data = { states: 200 };
        res.status(200).json(data);
    }
    catch (err) {
        throw err;
    }
});

module.exports = router;