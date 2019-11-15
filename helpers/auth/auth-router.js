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
      res.status(401).json({
        message: `There was an error registering you: ${error.message}`
      });
    });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  Users.findBy({ username })
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.user = user;
        res.status(200).json({ message: `Welcome, ${username}` });
      } else {
        res.status(400).json({ message: `Wrong credentials` });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: `There was an error logging you in: ${error.message}`
      });
    });
});

router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy(error => {
      if (error) {
        res.status(401).json({
          message: `There was an error logging you out.`
        });
      } else {
        res.status(200).json({ message: `You are now logged out` });
      }
    });
  } else {
    res.end();
  }
});

router.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = router;
