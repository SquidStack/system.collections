
export interface IDicationary<K,V>{

    Add(key:K,value:V):IDicationary<K,V>;

    GetValue(key:K):V | undefined

    ForEach(func:(key:K,value:V) => unknown): void;

    Clear(): IDicationary<K, V>
}

export class Dictionary<K,V> implements IDicationary<K,V>{
    private dictionary:Map<K,V>;
    private objToMap:[K,V][];
    constructor(obj:object){
        this.objToMap = Object.entries(obj) as [K,V][]
        this.dictionary = new Map<K,V>(this.objToMap);
    }


    Add(key: K, value: V): IDicationary<K, V> {
        this.dictionary.set(key,value);
        return this;
    }

    GetValue(key:K):V | undefined{
        return this.dictionary.get(key);
    }

    ForEach(callback:(key:K,value:V) => unknown){
        for(var [key,value] of this.dictionary.entries()){
            callback(key,value);
        }
    }

    Clear(): IDicationary<K, V>{
        this.dictionary.clear();
        return this;
    }

    ToObject(){
        return Object.fromEntries(this.dictionary);
    }

}