const { tracker } = require("./Tracker");

function main() {
  tracker.addPage(1);
  tracker.addPage(2);
  tracker.addPage(3);
  tracker.addPage(4);
}
function main1() {
  tracker.addPage(1);
  tracker.addPage(2);
  tracker.addPage(3);
  tracker.addPage(4);
}
main();
main1();
console.log(tracker.getPages());
