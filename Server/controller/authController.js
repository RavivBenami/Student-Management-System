var authBL = require('../models/authBL')
var express = require('express')
var router = express.Router();


router.route('/').post(async(req,resp)=>{
    var nameNEmail = req.body;
    var result = await authBL.checkAuth(nameNEmail.username,nameNEmail.email)
   return resp.json(result)
})

module.exports = router;