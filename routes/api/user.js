const router = require("express").Router();
const db = require("../../models")

router.get("/api/user/:id", (req, res) =>{
    db.User
          .findById({_id:req.params.id})
          .then((dbModel) => res.json(dbModel))
          .catch((err) => res.status(422).json(err))
})




  
module.exports = router;