/* Get 'home' page */
const homelist = (req, res) => {
    res.render('location-list', {title:'Home'});
};

/* Get Location Info page */
const locationInfo = (req, res) => {
    res.render('location-info', {title:'Location Info'});
};

/* Get 'AddReview' page*/
const addReview = (req,res) => {
    res.render("location-review-form",{title:"Add Review"});
};

module.exports = {
    homelist,
    locationInfo,
    addReview
};