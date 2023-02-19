import {CommandDispatcher} from 'system-core'

var x = new CommandDispatcher()

class CommandHandlerText {

    execute(command){
        console.log(command.name);
        return "Something coool";
    }
}

class Command {
    handlerReference = CommandHandlerText;

    constructor(name){
        this.name = name;
    }
}


var str = x.Dispatch(new Command("testing"))
console.log(str)