var express = require('express');
const { token } = require('morgan');
var router = express.Router();

/* GET users listing. */
router.post('/login', function(req, res, next) {
  let userInfo = req.body
  let resMsg = {}
  if(userInfo.userId === 123456) {
    resMsg = {
      username: "杨航",
      power: 3
    }
  } else {
    resMsg = {
      username: "王洋",
      power: 1
    }
  }
  resMsg.token = 'asdfasfhkjadshfuiaasbhkiadhf'
  req.header("set-cookie",token)
  res.json({
    data:resMsg,
    message: 'success',
    code: 1
  })
});
router.post('/updateInfo', function(req, res, next) {
  let userInfo = req.body
  console.log(userInfo)
  userInfo.msg = true
  res.json({
    message: 'success',
    code: 1
  })
});
router.post('/updatePass', function(req, res, next) {
  let userInfo = req.body
  console.log(userInfo)
  res.json({
    message: 'success',
    code: 1
  })
});
router.post('/info', function(req, res, next) {
  let userInfo = req.body
  console.log(userInfo)
  userInfo.msg = true
  res.json({
    message: 'success',
    code: 1
  })
});

module.exports = router;
