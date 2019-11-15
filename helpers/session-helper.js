const sessionConfig = {
  name: "user-session",
  secret: process.env.SECRET_SESSION,
  cookie: {
    maxAge: 1000 * 30,
    secure: false,
    httpOnly: true
  },
  resave: false,
  saveUninitialized: false
};

module.exports = sessionConfig;
