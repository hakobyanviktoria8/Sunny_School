const currentTime = () => {
   return  `${new Date().getHours()} ${new Date().getMinutes()} ${new Date().getSeconds()} ${new Date().getMilliseconds()}`
};

module.exports = currentTime;