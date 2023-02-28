import {Iterator,Dictionary,LinkedList,} from 'system.collections'


var list = new LinkedList();

list.addFirst({age:1});
list.addLast({age:2});
list.addLast({age:3})

var nd = list.find(x => x.age == 3);
list.addBefore(nd,{age:5});

list.addAfter(nd,{age:6});

var iter = new Iterator(list);

while(iter.valid()){
    console.log(iter.next().age)
}