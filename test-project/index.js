import {Iterator,Dictionary} from 'system.collections'


var z = new Dictionary({age:6,name:"chris",address:"123 Street"});

var iterator = new Iterator(z);

while(iterator.valid()){
    var [key,value] = iterator.next();
    console.log({[key]:value})
}