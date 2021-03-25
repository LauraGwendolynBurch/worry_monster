const router = require("express").Router();
const db = require("../../models");
const checkAuth = require("../middleware/checkauth");
const ObjectId = require("mongoose").Types.ObjectId;
//current user's worry

router.get("/api/posts", checkAuth, (req, res) => {
  // console.log(req.params.userid);
  console.log("userdata", req.userData);
  //not sending userid in url/ userid should be protected
  db.Post.find({ user: req.userData.id })
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

//eveyone's worry - all is all worries that are shared
router.get("/api/posts/all", checkAuth, (req, res) => {
  db.Post.find({share: true})
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

router.post("/api/posts", checkAuth, (req, res) => {
  console.log(req.userData);

  req.body.user = req.userData.id;
  //using id from cookie
  // userid should not be on URL
  //req.body.user => for recognizing who added the post
  console.log(req.body);
  db.Post.create(req.body)
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

<<<<<<< HEAD

=======
>>>>>>> ce63776f7e18eae417276fc686b51ffb887969af
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
