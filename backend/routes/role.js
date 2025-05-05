const express = require("express");

// Import roles controller
const { createNewRole } = require("../controllers/role");

const roleRouter = express.Router();

roleRouter.post("/", createNewRole);

module.exports = roleRouter;