/* Get Homepage */
const index = (req, res) => {
    res.render('index',{title: 'Pradnesh'});
};

module.exports = {
    index
};