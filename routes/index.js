var express = require('express');
var router = express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', function(req, res, next) {
  const { author, message } = req.body;
  console.log("post", author, " / ", message);
  messages.push({
      text: message,
      user: author,
      added: new Date()
    });
  console.log(messages[messages.length - 1]);
  res.redirect('/');
});
module.exports = router;