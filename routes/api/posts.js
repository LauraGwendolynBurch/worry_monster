const router = require("express").Router();
const db = require("../../models");
const authenticatedUser = require("../middleware/authenticateUser")
const ObjectId = require("mongoose").Types.ObjectId;
//current user's worry

router.get("/api/posts", authenticatedUser, (req, res) => {
  // console.log(req.params.userid);
  console.log("userdata", req.userData);
  //not sending userid in url/ userid should be protected
  db.Post.find({ user: req.user._id })
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

//eveyone's worry - all is all worries that are shared
router.get("/api/posts/all", authenticatedUser, (req, res) => {
  db.Post.find({share: true})
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

router.post("/api/posts", authenticatedUser, (req, res) => {
  console.log(req.userData);

  req.body.user = req.user._id;
  //using id from cookie
  // userid should not be on URL
  //req.body.user => for recognizing who added the post
  console.log(req.body);
  db.Post.create(req.body)
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});


router.put("/api/posts/:postid", async (req, res) => {
  const postUpdate = await db.Post.findById(req.params.postid);
  console.log(postUpdate);

  postUpdate.share = !postUpdate.share;

  db.Post.findOneAndUpdate({ _id: req.params.postid }, postUpdate)
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

router.delete("/api/posts/:postid", (req, res) => {
  db.Post.findByIdAndRemove(req.params.postid)
    .then((dbModel) => dbModel.remove())
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

module.exports = router;
