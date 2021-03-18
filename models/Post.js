const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  city: { type: String, required: true },
  body: String,
  date: { type: Date, default: Date.now },
  user: {	  
      type: Schema.Types.ObjectId,	    
      ref: 'users',	    
    },
   share: { type: Boolean, default: false }
});

const Posts = mongoose.model("Posts", postSchema);

module.exports = Posts;