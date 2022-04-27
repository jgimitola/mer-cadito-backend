import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  product_id: String,
  user_id: String,
  sold: { type: Boolean, default: false },
  sold_at: { type: Date, default: Date.now },
});

const Cart = mongoose.model('Cart', schema);

export default Cart;
