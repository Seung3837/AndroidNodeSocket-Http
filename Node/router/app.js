let express = require('express');
let router = express.Router();

router.post('/', function (request, response) {
    let data = request.body;

    console.log(data);

    response.json(data);
});

module.exports = router;