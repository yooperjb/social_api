const moment = require('moment');

const time = Date.now();
console.log(moment(time).format('dddd, MMMM do YYYY, h:mm:ss a'));
console.log(time);
