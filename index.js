import express from "express";

import { routes } from "./src/routes";
import middleware from "./src/middleware";

const app = express();
// Auto Register all middleware
Object.values(middleware).map(ware => app.use(ware));

// Auto Register all routes
Object.values(routes).map(route => app.use(route));

// Prevent's jest from hanging up during tests
if (process.env.NODE_ENV !== "test") {
  const _PORT = process.env._PORT || 3000;

  app.listen(_PORT, err => {
    if (err) throw new Error("Something went very wrong!");
    console.log(`Server is running on port: ${_PORT}`);
  });
}

export default app;
