console.log('Start of the execution queue');
setTimeout(() => {console.log('Start of the execution queue')}, 0);
for (var i=1; i <= 100; i++) console.log(i);
console.log('End of the loop printing');
