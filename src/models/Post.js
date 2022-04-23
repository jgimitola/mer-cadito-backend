import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  owner_id: String,
  img_url: String,
  display_name: String,
  description: String,
  price: Number,
});

const Post = mongoose.model('Post', schema);

export default Post;
