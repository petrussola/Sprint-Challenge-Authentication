// IMPORT HELPERS

const server = require("./server");
const request = require("supertest");

// TESTS

describe("server", () => {
  test("the db env is testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
  test("should return an Ok status code from the index", async () => {
    const statusCode = 200;
    const response = await request(server).get("/api/auth");
    expect(response.status).toEqual(statusCode);
  });
});
