
export interface IEnummerable<T>{
    size():number;
    toArray():Array<T>
}

export interface IList<T> extends IEnummerable<T>{

    add(item:T):IList<T>;

    contains(predicate:(value:T,index:number) => void):boolean;

    where(predicate:(value: T, index: number) => unknown):IList<T>

    forEach(callback: (value: T, index: number, array: T[]) => void):void;

    remove(func:(value: T, index: number, array: T[]) => unknown):IList<T>;

    size():number;

    toArray():Array<T>;
}

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

export interface IDicationary<K,V> extends IEnummerable<[K,V]>{

    add(key:K,value:V):IDicationary<K,V>;

    getValue(key:K):V | undefined

    forEach(func:(key:K,value:V) => unknown): void;

    clear(): IDicationary<K, V>;

    size():number;

    toObject():{[key:string]:V};

    toArray():Array<[K,V]>;
}

export type IteratorUnion<T> = T | undefined; 
export interface IIterator<T extends IEnummerable<T>> {
    // Return the current element.
    current(): IteratorUnion<T>;

    // Return the current element and move forward to next element.
    next(): IteratorUnion<T>;

    // Return the key of the current element.
    key(): number;

    // Checks if current position is valid.
    valid(): boolean;

    // Return the current element and them move backwards to the previous.
    previous(): IteratorUnion<T>;

    // Reset the interator to the first element
    reset():void
}

export interface ILinkedList<T> {
    insertInBegin(data: T): Node<T>;
    insertAtEnd(data: T): Node<T>;
    deleteNode(node: Node<T>): void;
    traverse(): T[];
    size(): number;
    search(comparator: (data: T) => boolean): Node<T> | null;
}

export interface IObserver<V> {
    // Receive update from subject.
    update(eventData?:V): void;
}

export interface ISubject<V> {
    // Attach an observer to the subject.
    subscribe(observer: IObserver<V>): void;

    // Detach an observer from the subject.
    unsubscribe(observer: IObserver<V>): void;

    // Notify all observers about an event.
    publish(value?:V): void;
}