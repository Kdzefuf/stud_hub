const reviewsModel = require('../models/reviewsModel');

exports.getReviews = async (req, res) => {
  try {
    const reviews = await reviewsModel.getReviews();
    res.status(200).json(reviews);
  } catch (err) {
    console.error('Ошибка при обработке запроса на получение пользователей:', err);
    res.status(500).send('Ошибка сервера, не удалось получить пользователей');
  }
};

exports.findReviewsByMaterial = async (req, res) => {
  const { material_id } = req.body;

  try {
    const reviews = await reviewsModel.findReviewsByMaterial(material_id);
    
    if (!reviews) {
      return res.status(404).json({ message: 'Reviews not found' });
    }

    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getReviewById = async (req, res) => {
  const { id } = req.body;

  try {
    const reviews = await reviewsModel.getReviewById(id);
    
    if (!reviews) {
      return res.status(404).json({ message: 'Reviews not found' });
    }

    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.createReview = async (req, res) => {
  try {
    const review = await reviewsModel.createReview(req.body);
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateReview = async (req, res) => {
  const { id } = req.body;
  try {
    const review = await reviewsModel.updateReview(id, req.body);
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteReview = async (req, res) => {
  const { id } = req.body;
  try {
    await reviewsModel.deleteReview(id);
    res.status(200).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
