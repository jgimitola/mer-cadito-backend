import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  user_id: String,
  product_id: String,
  rating: Number,
  description: String,
});

const Review = mongoose.model('Review', schema);

export default Review;
