var event = require('events'),
    myEmitter = new event.EventEmitter();

myEmitter.on('someEvent', function(msg){
  console.log(msg);
});

myEmitter.emit('someEvent', 'Event Emitter 101');
