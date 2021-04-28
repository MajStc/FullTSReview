import "dotenv/config";
import UserController from "../controllers/user.controller";
import App from "./app/App";
import validateEnv from "./app/validateEnv";

// Check if private key exist
if (!process.env.JWT_PRIVATE_KEY) {
  console.error("Fatal Error: jwtPrivateKey is not defined.");
  process.exit(1);
}

// Validatin enivronmental variables
validateEnv();

// Starting app
const app = new App([
  // Adding all controllers
  new UserController(),
]);

// Express app listen
const server = app.listen();

module.exports = server;
