var express = require('express');
var router = express.Router();
const UserModel = require('../models/user');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const userData = {
    firstName:"Hardik",
    lastName:"Gupta",
    contactNo: "7894561230",
    email:"hardik.gupta@tecdune.com"
  };
  //  const user =  await UserModel.create(userData);

  const user = await UserModel.findOne({
    email:userData.email
  })

    res.status(200).json(user);
});

module.exports = router;
