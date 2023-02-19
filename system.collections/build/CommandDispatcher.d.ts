export interface ICommandHandler<TIn, VOut> {
    execute(command: TIn): VOut;
}
export interface ICommand {
    handlerReference: any;
}
export interface ICommandDispatcher {
    Dispatch<TIn extends ICommand, VOut>(command: TIn): VOut;
    DispatchAsync<TIn extends ICommand, VOut>(command: TIn): Promise<VOut>;
}
export declare class CommandDispatcher implements ICommandDispatcher {
    DispatchAsync<TIn extends ICommand, VOut>(command: TIn): Promise<VOut>;
    Dispatch<TIn extends ICommand, VOut>(command: TIn): VOut;
}
//# sourceMappingURL=CommandDispatcher.d.ts.map