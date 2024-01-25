class DummyLogger {
  constructor() {
    if (DummyLogger.instance === undefined) {
      DummyLogger.instance = this;
      this.logs = [];
    }
    return DummyLogger.instance;
  }
  log(x) {
    this.logs.push(x);
    console.log(x);
  }
  getLogsCount() {
    return this.logs.length;
  }
}

module.exports = { DummyLogger };
