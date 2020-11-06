let express = require("express");
let router = express.Router();
const qs = require("querystring");
const path = require('path');

router.get('/sitemap_loma18.txt', (req, res) => {
    res.sendFile(path.join(__dirname, '/../sitemap_loma18.txt'));
})

router.post('/sendMsg', (req, res) => {
    req.on("data", (data) => {
        let str = data.toString(),
            obj = JSON.parse(str);
        sendEmail.send(obj,res);
    })
})


module.exports = router;