const { DummyLogger } = require("./Logger");
function main() {
  const logger = new DummyLogger();
  logger.log(1);
  logger.log(2);
  logger.log(3);
  logger.log(4);
}
function main1() {
  const logger = new DummyLogger();
  logger.log(1);
  logger.log(2);
  logger.log(3);
  logger.log(4);
}
const logger = new DummyLogger();
main();
main1();
console.log(logger.getLogsCount());
