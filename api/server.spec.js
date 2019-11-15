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
  test("should return an OK 200", async () => {
    const testUser = { username: "mama", password: "1234" };
    const response = await request(server)
      .post("/api/auth/register")
      .send(testUser);
    expect(response.status).toEqual(200);
  });
  test("should return username of registered user", async () => {
    const testUser1 = { username: "test", password: "1234" };
    const response = await request(server)
      .post("/api/auth/register")
      .send(testUser1);
    expect(response.body.username).toEqual(testUser1.username);
  });
});

describe('POST login endpoint', () => {
  test("should return an OK 200", async () => {
    const testUser = { username: "mama", password: "1234" };
    const response = await request(server)
      .post("/api/auth/login")
      .send(testUser);
    expect(response.status).toEqual(200);
  });
  test('should return a welcome message', async () => {
    const testUser1 = { username: "pere", password: "1234" };
    const response = await request(server).post('/api/auth/login').send(testUser1);
    expect(response.body.message).toBe('Welcome, pere');
  });
})
