var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlLocations = require('../controllers/locations');

const ctrlOthers = require('../controllers/others');


/* GET home page. */

router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Pradnesh' });
//});
/*Other Pages*/
router.get('/about', ctrlOthers.about);
module.exports = router;
