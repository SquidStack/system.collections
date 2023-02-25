import { IEnummerable } from "../types";

type IteratorUnion<T> = T | undefined; 
export interface IIterator<T extends IEnummerable<T>> {
    // Return the current element.
    current(): IteratorUnion<T>;

    // Return the current element and move forward to next element.
    next(): IteratorUnion<T>;

    // Return the key of the current element.
    key(): number;

    // Checks if current position is valid.
    valid(): boolean;

    // Return the current element and them move backwards to the previous.
    previous(): IteratorUnion<T>;

    // Reset the interator to the first element
    reset():void
}

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