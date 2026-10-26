// Lab: JavaScript Functions - login tracker using closures + arrow functions
 
const MAX_ATTEMPTS = 3;
function createLoginTracker(userInfo) {
  // attemptCount lives in the outer function's scope. Only the inner
  // arrow function (closure) can read or change it, so nothing outside
  // can reset or tamper with it.
  let attemptCount = 0;

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
