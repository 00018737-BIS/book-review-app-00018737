let reviews = [];
let idCounter = 1;

exports.getReviews = () => reviews;

exports.getReviewById = (id) => reviews.find(r => r.id === id);

exports.addReview = (review) => {
    const newId = idCounter.toString();
    idCounter += 1;
    review.id = newId;
    reviews.push(review);
};

exports.updateReview = (id, updatedReview) => {
    const index = reviews.findIndex(r => r.id === id);
    if (index !== -1) {
        reviews[index] = { ...reviews[index], ...updatedReview };
    }
};

exports.deleteReview = (id) => {
    reviews = reviews.filter(r => r.id !== id);
};