const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviewsController');

router.get('/reviews', reviewsController.getReviews);
router.post('/reviews', reviewsController.createReview);
router.get('/reviews/:material_id', reviewsController.findReviewsByMaterial);
router.get('/review/:id', reviewsController.getReviewById);
router.put('/reviews/:id', reviewsController.updateReview);
router.delete('/reviews/:id', reviewsController.deleteReview);

module.exports = router;