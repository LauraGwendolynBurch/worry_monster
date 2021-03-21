const router = require("express").Router();
const db = require("../../models")
const checkAuth = require("../middleware/checkauth");
const ObjectId = require("mongoose").Types.ObjectId;

router.get("/api/posts/:userid", checkAuth, (req, res) =>{
    // console.log(req.params.userid);
    db.Post
    .find({ user: new ObjectId(req.params.userid) })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
})

router.get("/api/posts/",checkAuth , (req, res) =>{
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
router.put("/api/posts/:postid", async (req, res) =>{
    
    const postUpdate =  await db.Post.findById(req.params.postid);

    console.log(postUpdate);

    postUpdate.share= !postUpdate.share;

    db.Post
      .findOneAndUpdate({_id: req.params.postid}, postUpdate )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
})
router.delete("/api/posts/:postid", (req, res) =>{
    db.Post.findByIdAndRemove( req.params.postid)
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
})


module.exports = router;