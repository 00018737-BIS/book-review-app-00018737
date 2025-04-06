const reviewsService = require('../services/reviews');
const { validationResult } = require('express-validator');

exports.getAllReviews = (req, res) => {
    const reviews = reviewsService.getReviews();
    res.render('index', { reviews });
};

exports.getNewReviewForm = (req, res) => {
    res.render('review-form', { title: 'New Review', action: '/reviews', errors: [] });
};

exports.createReview = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render('review-form', { 
            title: 'New Review', 
            action: '/reviews', 
            review: req.body, 
            errors: errors.array() 
        });
    }
    const { title, author, content } = req.body;
    reviewsService.addReview({ title, author, content });
    res.redirect('/reviews');
};

exports.getEditReviewForm = (req, res) => {
    const review = reviewsService.getReviewById(req.params.id);
    if (review) {
        res.render('review-form', { title: 'Edit Review', action: `/reviews/edit/${req.params.id}`, review, errors: [] });
    } else {
        res.redirect('/reviews');
    }
};

exports.updateReview = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render('review-form', { 
            title: 'Edit Review', 
            action: `/reviews/edit/${req.params.id}`, 
            review: req.body, 
            errors: errors.array() 
        });
    }
    const { title, author, content } = req.body;
    reviewsService.updateReview(req.params.id, { title, author, content });
    res.redirect('/reviews');
};

exports.deleteReview = (req, res) => {
    reviewsService.deleteReview(req.params.id);
    res.redirect('/reviews');
};