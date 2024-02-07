const { buildLogger } = require("./plugins");
const logger = buildLogger("app.js");

//Normal log
logger.log("Hello world");

logger.error("This is bad");
