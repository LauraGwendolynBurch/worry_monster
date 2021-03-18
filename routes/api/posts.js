const router = require("express").Router();
const db = require("../../models")

router.get("/api/posts/:userid", (req, res) =>{
    db.Post
    .find({user:req.params.userid})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
})

router.get("/api/posts/", (req, res) =>{
    db.Post
    .find()
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
})

router.post("/api/posts", (req, res) =>{
    db.Post
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
})


module.exports = router;