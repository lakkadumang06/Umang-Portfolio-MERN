var express = require('express');
var router = express.Router();
var cors = require('cors');

router.use(cors());


var sendmail = require('../controller/sendmailcontroller');

/* GET home page. */
router.post('/', sendmail.insert);
router.post('/info', sendmail.insert_info);
router.get('/', sendmail.get_data);

module.exports = router;
