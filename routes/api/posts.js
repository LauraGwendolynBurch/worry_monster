const router = require("express").Router();
const db = require("../../models")
const checkAuth = require("../middleware/checkauth");
const ObjectId = require("mongoose").Types.ObjectId;

router.get("/api/posts/:userid", (req, res) =>{
    // console.log(req.params.userid);
    db.Post
    .find({ user: new ObjectId(req.params.userid) })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
})

router.get("/api/posts/", (req, res) =>{
    db.Post
    .find()
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
})

router.post("/api/posts", checkAuth, (req, res) =>{
    db.Post
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
})

router.put("./api/post/:postid", (req, res) =>{
    db.Post
      .findOneAndUpdate({ _id: req.params.postid }, req.body, { new: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
})

router.delete("./api/post/:postid", (req, res) =>{
    db.Post.findById({ _id: req.params.postid })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
})

module.exports = router;