var time = 0,
    timer = setInterval(function () {
  time += 2;
  // console.log(time + ' after seconds '+ __dirname);
  // console.log(__filename);

if(time > 5){
  clearInterval(timer);
}

}, 2000),

 someFun = require('./count.js'),
 circleMath =require('./math.js');

 console.log(someFun(['malhar', 'shaila', 'st. lucia', 'portugal']));

 console.log('Area of the circle = ' + circleMath.area(9));
 console.log('Circumference of the circle = ' + circleMath.circumference(9));
