const path = require("path");

const resources = ["_extensions.scss", "_vars.scss"];

module.exports = resources.map(file => path.resolve(__dirname, file));