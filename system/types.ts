
export interface IEnummerable<T>{
    size():number;
    toArray():Array<T>
}
export interface IList<T> extends IEnummerable<T>{
    add(item:T):IList<T>;
    addRange(items:Array<T>):IList<T>;
    getRange(startIndex:number,count:number):Array<T>;
    contains(predicate:(value:T,index:number) => void):boolean;
    where(predicate:(value: T, index: number) => unknown):IList<T>
    forEach(callback: (value: T, index: number, array: T[]) => void):void;
    remove(func:(value: T, index: number, array: T[]) => unknown):IList<T>;
    removeAll(predicate: (value: T, index: number, array: T[]) => unknown):void;
    removeRange(startIndex:number,count:number):void;
    size():number;
    asReadOnly(): ReadonlyArray<T>;
    toArray():Array<T>;
    binarySearch(item:T):number;
    find(predicate:any):T;
    findAll():Array<T>;
    findIndex():number;
    indexOf():number;
    insert(index:number,item:T):void;
    insertRange(index:number,items:Array<T>):void;
    sort(predicate?: ((a: T, b: T) => number) | undefined):Array<T>
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
    containsKey(key:K):boolean;
    containsValue(value:V):boolean;
    ensureCapacity(capacity:number):number;
}

export type IteratorUnion<T> = T | undefined; 
export interface IIterator<T extends IEnummerable<T>> {
    current(): IteratorUnion<T>;
    next(): IteratorUnion<T>;
    key(): number;
    valid(): boolean;
    previous(): IteratorUnion<T>;
    reset():void
}

export interface INode<T> {
    next: INode<T> | null
    prev: INode<T> | null
    data: T;
}
export interface ILinkedList<T> extends IEnummerable<T>{
    addFirst(data: T): INode<T>;
    addLast(data: T): INode<T>;
    addAfter(existingNode:INode<T>,data:T):INode<T>;
    addBefore(existingNode:INode<T>,data:T):INode<T>;
    deleteNode(node: INode<T>): void;
    size(): number;
    clear():void;
    find(comparator: (data: T) => boolean): INode<T> | null;
}
export interface IObserver<V> {
    update(eventData?:V): void;
}
export interface ISubject<V> {
    subscribe(observer: IObserver<V>): void;
    unsubscribe(observer: IObserver<V>): void;
    publish(value?:V): void;
}