import { IEnummerable } from "../types";

export interface IDicationary<K,V> extends IEnummerable<[K,V]>{

    add(key:K,value:V):IDicationary<K,V>;

    getValue(key:K):V | undefined

    forEach(func:(key:K,value:V) => unknown): void;

    clear(): IDicationary<K, V>
}

export class Dictionary<K,V> implements IDicationary<K,V>{
    private dictionary:Map<K,V>;
    private objToMap:[K,V][];
    constructor(obj?:object){
        this.objToMap = obj ? Object.entries(obj) as [K,V][] : Object.entries({}) as [K,V][];
        this.dictionary = new Map<K,V>(this.objToMap);
    }

    get Content() {
        return Object.fromEntries(this.dictionary);
    }

    public add(key: K, value: V): IDicationary<K, V> {
        this.dictionary.set(key,value);
        return this;
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

    public toObject(){
        return Object.fromEntries(this.dictionary);
    }

    public toArray(){
        return Array.from(this.dictionary);
    }

}