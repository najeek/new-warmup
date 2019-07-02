module.exports = function warmup(temperature) {
 if(typeof temperature === 'number') {
   return (temperature * 9/5) + 32
 }
};
