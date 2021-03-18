const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/worryMonster");


const userSeeds = [
  {
    email: "bob@gmail.com",
    password: "$2a$10$WttW6zQLdoUe8leQ5C.lgeBBw5CFUHjOvA9bXGB5tVQdaYFgw3qoG"
  },
  {
    email: "john@gmail.com",
    password: "$2a$10$WttW6zQLdoUe8leQ5C.lgeBBw5CFUHjOvA9bXGB5tVQdaYFgw3qoG"
  }
];

const worrySeed = [
  {
    city: "Seattle",
    body:
      "This is where you post your worry.  I worry about too much rain.",
    date: new Date(Date.now())
  },
  {
    city: "Dallas",
    body:
        "I am worried about money.",
    date: new Date(Date.now())
  },
  {
    city: "Orlando",
    body:
        "I am worried my husband is mad at me.",
    date: new Date(Date.now())
  }
];

db.Post.remove({})
  .then(() => db.Post.collection.insertMany({worrySeed, userSeeds}))
  .then(data => {
    console.log(data.result.n + " worries inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
