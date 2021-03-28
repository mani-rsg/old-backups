const {people:friends, ages} = require('./people');

console.log(friends, ages);

const os= require('os');

console.log(os.platform(), os.homedir) //current platform in which it runs, home directory of the current system