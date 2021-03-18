const mongoose = require("mongoose");
// const db = require("../models");

// This file empties the Posts collection and inserts the books below
const User = require("../models/User");
const Post = require("../models/Post");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/worryMonster");


const userSeeds = [
  {
    _id: 20,
    email: "bob@gmail.com",
    password: "$2a$10$WttW6zQLdoUe8leQ5C.lgeBBw5CFUHjOvA9bXGB5tVQdaYFgw3qoG",
    username:"Laura"
  },
  {
    _id: 12,
    email: "john@gmail.com",
    password: "$2a$10$WttW6zQLdoUe8leQ5C.lgeBBw5CFUHjOvA9bXGB5tVQdaYFgw3qoG",
    username:"Aaron"
  }
];

const worrySeed = [
  {
    user: 12,
    city: "Seattle",
    body:
      "I worry about too much rain.",
    date: new Date(Date.now()),
    share: false
  },
  {
    user: 12,
    city: "Dallas",
    body:
        "I am worried about money.",
    date: new Date(Date.now()),
    share: false
  },
  {
    user: 20,
    city: "Orlando",
    body:
        "I am worried my husband is mad at me.",
    date: new Date(Date.now()),
    share: false
  }
];


  Post.remove({})
  .then(() => Post.collection.insertMany(worrySeed))
  .then(data => {
    console.log(data.result.n + " worries inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  User.remove({})
  .then(() => User.collection.insertMany(userSeeds))
  .then(data => {
    console.log(data.result.n + " users inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
