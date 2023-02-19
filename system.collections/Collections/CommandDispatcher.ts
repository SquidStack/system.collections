

export interface ICommandHandler<TIn,VOut>{
    execute(command:TIn):VOut
}

export interface ICommand{
    handlerReference:any;
}

export interface ICommandDispatcher{

    Dispatch<TIn extends ICommand,VOut>(command:TIn):VOut;

    DispatchAsync<TIn extends ICommand,VOut>(command:TIn):Promise<VOut>;

}

export class CommandDispatcher implements ICommandDispatcher{

    public async DispatchAsync<TIn extends ICommand, VOut>(command: TIn): Promise<VOut> {
        const handlerInstance = command.handlerReference
        var classInstance = new handlerInstance();
        return classInstance.execute(command);        
    }
    
    public Dispatch<TIn extends ICommand,VOut>(command: TIn): VOut {
        const handlerInstance = command.handlerReference
        var classInstance = new handlerInstance();
        return classInstance.execute(command); 
    }

}