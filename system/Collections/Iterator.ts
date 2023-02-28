import { IEnummerable, IIterator, IteratorUnion } from "../types";

export class Iterator<T extends IEnummerable<T>> implements IIterator<T>{

    private position: number = 0;
    private collection:T;

    constructor(collection:T){
        this.collection = collection;
    }
    
    public current(): IteratorUnion<T> {
        return this.collection.toArray()[this.position];
    }

    public next(): IteratorUnion<T> {
        const item = this.collection.toArray()[this.position];
        this.position += 1;
        return item;
    }

    public key(): number {
        return this.position;
    }

    public valid(): boolean {
        return this.position < this.collection.size();
    }

    public previous(): IteratorUnion<T> {
        const item = this.collection.toArray()[this.position];
        this.position -= 1;
        return item;
    }
    
    public reset(): void {
        this.position = 0;
    }

}