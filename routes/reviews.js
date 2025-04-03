const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const reviewsController = require('../controllers/reviews');

router.get('/', reviewsController.getAllReviews);
router.get('/new', reviewsController.getNewReviewForm);
router.post('/', [
    body('title').trim().notEmpty().withMessage('Title is required'),
    body('author').trim().notEmpty().withMessage('Author is required'),
    body('content').trim().notEmpty().withMessage('Review content is required')
], reviewsController.createReview);
router.get('/edit/:id', reviewsController.getEditReviewForm);
router.post('/edit/:id', [
    body('title').trim().notEmpty().withMessage('Title is required'),
    body('author').trim().notEmpty().withMessage('Author is required'),
    body('content').trim().notEmpty().withMessage('Review content is required')
], reviewsController.updateReview);
router.get('/delete/:id', reviewsController.deleteReview);

module.exports = router;