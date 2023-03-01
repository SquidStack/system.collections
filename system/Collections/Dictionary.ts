import { IDicationary } from "../types";



export class Dictionary<K,V> implements IDicationary<K,V>{
    private dictionary:Map<K,V>;
    private objToMap:[K,V][];
    private maxCapacity:number;
    constructor(obj?:object){
        this.objToMap = obj ? Object.entries(obj) as [K,V][] : Object.entries({}) as [K,V][];
        this.dictionary = new Map<K,V>(this.objToMap);
        this.maxCapacity = Infinity;
    }

    get content() {
        return Object.fromEntries(this.dictionary);
    }

    public add(key: K, value: V): IDicationary<K, V> {
        if(this.ensureCapacity(this.maxCapacity) > 0){
            this.dictionary.set(key,value);
        }
        return this;
    }

    public containsKey(key:K):boolean{
        return this.dictionary.has(key);
    }

    public containsValue(value: V): boolean {
        const vals = this.dictionary.values();
        let doesContainValue = false;
        for(var i = 0; i < this.size(); i++){
            if(vals.next().value == value){
                doesContainValue = true;
                return doesContainValue
            }
        }
        return doesContainValue;
    }

    public delete(key:K):IDicationary<K,V>{
        this.dictionary.delete(key);
        return this;
    }

    public getValue(key:K):V | undefined{
        return this.dictionary.get(key);
    }

    public forEach(callback:(key:K,value:V) => unknown){
        for(var [key,value] of this.dictionary.entries()){
            callback(key,value);
        }
    }

    public clear(): IDicationary<K, V>{
        this.dictionary.clear();
        return this;
    }

    public size(): number {
        return this.dictionary.size;
    }

    public ensureCapacity(capacity: number): number {
        this.maxCapacity = capacity;
        if(this.size() <= this.maxCapacity){
            return this.size() - this.maxCapacity;
        }
        throw Error("Argument out of range")
    }

    public toObject():{[key:string]:V}{
        return Object.fromEntries(this.dictionary);
    }

    public toArray():Array<[K,V]>{
        return Array.from(this.dictionary);
    }

}