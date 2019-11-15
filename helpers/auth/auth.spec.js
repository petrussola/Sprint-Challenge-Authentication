// IMPORT HELPERS

const server = require("./auth-router");
const request = require("supertest");

// TESTS

describe("server", () => {
  test("the db env is testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});
