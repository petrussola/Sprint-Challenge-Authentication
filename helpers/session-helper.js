

const sessionConfig = {
  name: "user-session",
  secret: 'thisisthemostsecretevercreatedintheworld',
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: false,
    httpOnly: false,
    sameSite: 'lax'
  },
  resave: false,
  saveUninitialized: false
};

module.exports = sessionConfig;
