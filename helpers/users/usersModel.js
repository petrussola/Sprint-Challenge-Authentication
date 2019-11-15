const db = require("../../database/dbConfig");

module.exports = {
  addUser,
  findBy
};

function addUser(user) {
  return db("users")
    .insert(user)
    .then(ids => {
      return findUserById(ids[0]);
    });
}

function findUserById(id) {
  return db("users")
    .where({ id })
    .first();
}

function findBy(filter) {
  return db("users")
    .where(filter)
    .first();
}
