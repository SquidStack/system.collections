import { ILinkedList, INode } from "../types";

export class Node<T> implements INode<T>{
    public next: INode<T> | null = null;
    public prev: INode<T> | null = null;
    constructor(public data: T) { }
}


export class LinkedList<T> implements ILinkedList<T>{
        
    private head: INode<T> | null = null;
    
    public addAfter(existingNode: INode<T>, data: T): INode<T> {
        let ar = this.toArray();
        var ix = ar.findIndex(x => x == existingNode.data);

        const node = new Node(data);
        var curr, prev;

        if(ix == 0){
            node.next = this.head;
            this.head = node;
        } else {
            curr = this.head;
            var it = 0;
            ix = ix +1
            while (it < ix) {
                it++;
                prev = curr;
                curr = curr != null ? curr.next:null;
            }
            prev as INode<T>;
            node.next = curr;
            prev != null ? prev.next = node : null;
        }
        
        return node;
    }

    public addBefore(existingNode: INode<T>, data: T): INode<T> {
        let ar = this.toArray();
        var ix = ar.findIndex(x => x == existingNode.data);

        const node = new Node(data);
        var curr, prev;

        if(ix == 0){
            node.next = this.head;
            this.head = node;
        } else {
            curr = this.head;
            var it = 0;

            while (it < ix) {
                it++;
                prev = curr;
                curr = curr != null ? curr.next:null;
            }
            node.next = curr;
            prev!= null ? prev.next = node : null
        }
        
        return node;
    }

    public addFirst(data: T): INode<T> {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        return node;
    }

    public addLast(data: T): INode<T> {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
        } else {
            const lastNode = this.getLast(this.head);
            node.prev = lastNode;
            lastNode.next = node;
        }
        return node;
    }

    public deleteNode(node: Node<T>): void {
        if (!node.prev) {
            this.head = node.next;
        } else {
            const prevNode = node.prev;
            prevNode.next = node.next;
        }
    }

    public toArray(): T[] {
        const array: T[] = [];
        if (!this.head) {
            return array;
        }
        return this.addToArray(this.head,array);
    }

    public size(): number {
        return this.toArray().length;
    }

    public find(comparator: (data: T) => boolean): INode<T> | null {
        return this.head ? this.checkNext(this.head,comparator) : null;
    }

    public clear(): void{
        this.head = null;
    }

    private getLast(node: INode<T>): INode<T> {
        return node.next ? this.getLast(node.next) : node;
    }

    private addToArray(node:INode<T>,array:Array<T>):Array<T>{
        array.push(node.data);
        return node.next ? this.addToArray(node.next,array) : array;
    }

    private checkNext(node:INode<T>,comparator:(data:T) => boolean):INode<T> | null {
        if(comparator(node.data)){
            return node;
        }
        return node.next ? this.checkNext(node.next,comparator) : null;
    }

}