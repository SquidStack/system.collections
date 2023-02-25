

export interface ICommandHandler<TIn,VOut>{
    execute(command:TIn):VOut
}

export interface ICommand{
    /**
     * This should be a reference to the command handler class 
     * as the instance is created from this reference
     */
    handlerReference:any;
}

export interface ICommandDispatcher{

    dispatch<TIn extends ICommand,VOut>(command:TIn):VOut;

    dispatchAsync<TIn extends ICommand,VOut>(command:TIn):Promise<VOut>;

}

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