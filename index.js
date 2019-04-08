const express = require("express");
const app = express();
const routes = require("./src/routes");
const middleware = require("./src/middleware");

// Auto Register all middleware
Object.keys(middleware).map(ware => {
  app.use(middleware[ware]);
});

// Auto Register all routes
Object.keys(routes).map(route => {
  app.use(routes[route]);
});

// Prevent's jest from hanging up during tests
if (process.env.NODE_ENV !== "test") {
  const _PORT = process.env._PORT || 3000;

  app.listen(_PORT, err => {
    if (err) throw new Error("Something went very wrong!");
    console.log(`Server is running on port: ${_PORT}`);
  });
}

module.exports = app;
