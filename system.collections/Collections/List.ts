

export interface IEnummerable<T>{

    Add(item:T):IEnummerable<T>;

    Remove(func:(value: T, index: number, array: T[]) => unknown):IEnummerable<T>;

    ToList():Array<T>;
}

export class List<T> implements IEnummerable<T>{
    
    private list:Array<T>

    constructor(){
        this.list = new Array<T>();
    }

    Add(item: T): IEnummerable<T>{
        this.list.push(item);
        return this;
    }

    Remove(func: (value: T, index: number, array: T[]) => unknown):IEnummerable<T>{
        this.list = this.list.filter(func);
        return this;
    }

    ToList():T[]{
        return this.list;
    }
}