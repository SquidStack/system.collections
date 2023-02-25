
export class Queue<T>{

    private items:Array<T>;
    private capacity:number;
    constructor(params:Array<T>,capacity:number = Infinity){
        this.capacity = capacity;
        this.items = [];
        if(params.length > 0 && params.length <= capacity){
            this.items = [...params];
        } else {
            throw Error("Stack arguments exceeds capacity")
        }
    }

    public enqueue(item: T) {
        if (this.size() === this.capacity) {
            throw Error("Stack has reached max capacity, you cannot add more items");
        }
        this.items.push(item);
    }

    public dequeue() {
        return this.items.shift();
    }

    public getItems(){
        return this.items;
    }

    public peek(): T | undefined{
        return this.items[this.size() -1];
    }

    public size(): number{
        return this.items.length;
    }
}