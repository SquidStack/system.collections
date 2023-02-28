

export class HashSet<T> {

    private hashset:Set<T>;

    constructor(){
        this.hashset = new Set<T>();
    }

    public delete(value:T):HashSet<T>{
        this.hashset.delete(value);
        return this;
    }

    public add(value:T):HashSet<T>{
        this.hashset.add(value);
        return this;
    }

    public clear():HashSet<T>{
        this.hashset.clear();
        return this;
    }

    public forEach(callback:(value: T, value2: T, set: Set<T>) => void):void{
        this.hashset.forEach(callback);
    }

    public toObject(){
        return Object.entries(this.hashset);
    }

    public toArray(){
        return Array.from(this.hashset);
    }

}