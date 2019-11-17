const server = require("./api/server.js");

const { PORT = 3000 } = process.env;

server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});
