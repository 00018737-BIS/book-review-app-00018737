const reviewsService = require('../services/reviews');

exports.getHome = (req, res) => {
    const reviews = reviewsService.getReviews();
    res.render('index', { reviews });
};