


export class HashSet<T> {

    private hashset:Set<T>;

    constructor(){
        this.hashset = new Set<T>();
    }

    Add(value:T):HashSet<T>{
        this.hashset.add(value);
        return this;
    }

    Clear():HashSet<T>{
        this.hashset.clear();
        return this;
    }

}