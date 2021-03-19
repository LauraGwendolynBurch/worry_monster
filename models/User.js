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
  Posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Posts',
    },
  ],
},
{
  usePushEach: true,
}
);

const User = mongoose.model("users", UserSchema);

module.exports = User;