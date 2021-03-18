const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  Post: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
});

module.exports = User = mongoose.model("users", UserSchema);