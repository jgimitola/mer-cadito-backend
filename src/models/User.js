import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  display_name: String,
  username: String,
  password: String,
});

const User = mongoose.model('User', schema);

export default User;
