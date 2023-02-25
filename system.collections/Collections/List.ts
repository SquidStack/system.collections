import { IEnummerable } from "../types";


export interface IList<T> extends IEnummerable<T>{

    add(item:T):IList<T>;

    remove(func:(value: T, index: number, array: T[]) => unknown):IList<T>;

}

export class List<T> implements IList<T>{
    
    private list:Array<T>

    constructor(){
        this.list = new Array<T>();
    }

    public add(item: T): IList<T>{
        this.list.push(item);
        return this;
    }

    public contains(predicate:(value:T,index:number) => void):boolean{
        return this.list.some(predicate);
    }

    public remove(func: (value: T, index: number, array: T[]) => unknown):IList<T>{
        this.list = this.list.filter(func);
        return this;
    }

    public where(predicate:(value: T, index: number,) => unknown):IList<T>{
        this.list = this.list.filter(predicate)
        return this;
    }

    public forEach(callback: (value: T, index: number, array: T[]) => void){
        this.list.forEach(callback)
    }

    public size(): number {
        return this.list.length;
    }

    public toArray():T[]{
        return this.list;
    }
}