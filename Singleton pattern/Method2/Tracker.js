class Tracker {
  constructor() {
    this.pages = [];
  }
  addPage(pageID) {
    this.pages.push(pageID);
  }
  getPages() {
    return this.pages;
  }
}

// instance - static variable
class TrackerSingleton {
  constructor() {
    if (!Tracker.instance) {
      Tracker.instance = new Tracker();
    }
    return Tracker.instance;
  }
}

const tracker = new TrackerSingleton();

module.exports = { tracker };
