const router = require("express").Router();
const db = require("../../models")
const ObjectId = require("mongoose").Types.ObjectId;

router.get("/api/user/:id", (req, res) =>{
    // console.log("pinged")
    db.User
          .findById(new ObjectId(req.params.id))
          .then((dbModel) => res.json(dbModel))
          .catch((err) => res.status(422).json(err))
})




  
module.exports = router;