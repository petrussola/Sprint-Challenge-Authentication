// IMPORT DEPENDENCIES

const router = require("express").Router();
const bcrypt = require("bcryptjs");

// IMPORT MODEL

const Users = require("../users/usersModel");

router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;
  Users.addUser(user)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res
        .status(401)
        .json({
          message: `There was an error registering you: ${error.message}`
        });
    });
});

router.post("/login", (req, res) => {
  // implement login
});

module.exports = router;
