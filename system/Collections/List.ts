import { IList } from "../types";




export class List<T> implements IList<T>{
    
    private list:Array<T>

    constructor(){
        this.list = new Array<T>();
    }

    public getRange(startIndex: number, count: number): T[] {
        return this.list.slice(startIndex,count);
    }

    public removeAll(predicate: (value: T, index: number, array: T[]) => unknown): void {
        this.list = this.list.filter(predicate);
    }

    public removeRange(startIndex: number, count: number): void {
        this.list = this.list.splice(startIndex,count);
    }

    public binarySearch(item: T): number {
        throw new Error("Method not implemented.");
    }

    public find(predicate: any): T {
        throw new Error("Method not implemented.");
    }
    public findAll(): T[] {
        throw new Error("Method not implemented.");
    }

    public findIndex(): number {
        throw new Error("Method not implemented.");
    }

    public indexOf(): number {
        throw new Error("Method not implemented.");
    }

    public insert(index: number, item: T): void {
        this.list = this.list.splice(index,0,item);
    }

    public insertRange(index: number, items: T[]): void {
        this.list = this.list.splice(index,0,...items)
    }

    public sort(predicate?: ((a: T, b: T) => number) | undefined): T[] {
        this.list = this.list.sort(predicate);
        return this.list;
    }

    public add(item: T): IList<T>{
        this.list.push(item);
        return this;
    }

    public addRange(items: T[]): IList<T> {
        this.list = [...this.list,...items];
        return this;
    }

    public contains(predicate:(value:T,index:number) => void):boolean{
        return this.list.some(predicate);
    }

    public remove(func: (value: T, index: number, array: T[]) => unknown):IList<T>{
        this.list = this.list.filter(func);
        return this;
    }

    public where(predicate:(value: T, index: number) => unknown):IList<T>{
        this.list = this.list.filter(predicate)
        return this;
    }

    public forEach(callback: (value: T, index: number, array: T[]) => void){
        this.list.forEach(callback)
    }

    public size(): number {
        return this.list.length;
    }

    public asReadOnly(): ReadonlyArray<T> {
        return Object.freeze(this.list);
    }

    public toArray():T[]{
        return this.list;
    }
}