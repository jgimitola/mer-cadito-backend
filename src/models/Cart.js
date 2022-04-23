import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  product_id: String,
  user_id: String,
});

const Cart = mongoose.model('Cart', schema);

export default Cart;
