const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  transports: [
    new winston.transports.File({ filename: "logs/error.log" }),
    new winston.transports.Console()
  ]
});

module.exports = logger;