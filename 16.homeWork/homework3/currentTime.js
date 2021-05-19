function currentTime() {
   return {Hours : new Date().getHours(),
        Minutes: new Date().getMinutes(),
        Seconds :new Date().getSeconds()};
}
module.exports = currentTime;