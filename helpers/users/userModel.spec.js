const Users = require("./usersModel");
const db = require("../../database/dbConfig");

beforeEach(async () => {
  await db("users".truncate);
});

describe("Users model", () => {
  describe("insert function", () => {
    let users;
    test("should insert a user", async () => {
      await Users.insert({ username: "sam", password: "1234" });
      await Users.insert({ username: "pippin", password: "1234" });

      users = await db("users");
      expect(users).toHaveLength(2);

      await Hobbits.insert({ name: "frodo" });

      hobbits = await db("hobbits");
      expect(hobbits).toHaveLength(3);
    });
  });
});
