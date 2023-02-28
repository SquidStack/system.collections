import { ICommand, ICommandDispatcher } from "../types";

export class CommandDispatcher implements ICommandDispatcher{

    public async dispatchAsync<TIn extends ICommand, VOut>(command: TIn): Promise<VOut> {
        const handlerInstance = command.handlerReference
        var classInstance = new handlerInstance();
        return classInstance.execute(command);        
    }
    
    public dispatch<TIn extends ICommand,VOut>(command: TIn): VOut {
        const handlerInstance = command.handlerReference
        var classInstance = new handlerInstance();
        return classInstance.execute(command); 
    }

}