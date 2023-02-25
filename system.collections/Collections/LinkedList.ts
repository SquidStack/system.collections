class Node<T> {
    public next: Node<T> | null = null;
    public prev: Node<T> | null = null;
    constructor(public data: T) { }
}
export interface ILinkedList<T> {
    insertInBegin(data: T): Node<T>;
    insertAtEnd(data: T): Node<T>;
    deleteNode(node: Node<T>): void;
    traverse(): T[];
    size(): number;
    search(comparator: (data: T) => boolean): Node<T> | null;
}

export class LinkedList<T> implements ILinkedList<T>{

    private head: Node<T> | null = null;

    public insertInBegin(data: T): Node<T> {
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

    public insertAtEnd(data: T): Node<T> {
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

    public traverse(): T[] {
        const array: T[] = [];
        if (!this.head) {
            return array;
        }
        return this.addToArray(this.head,array);
    }

    public size(): number {
        return this.traverse().length;
    }

    public search(comparator: (data: T) => boolean): Node<T> | null {
        return this.head ? this.checkNext(this.head,comparator) : null;
    }

    private getLast(node: Node<T>): Node<T> {
        return node.next ? this.getLast(node.next) : node;
    }

    private addToArray(node:Node<T>,array:Array<T>):Array<T>{
        array.push(node.data);
        return node.next ? this.addToArray(node.next,array) : array;
    }

    private checkNext(node:Node<T>,comparator:(data:T) => boolean):Node<T> | null {
        if(comparator(node.data)){
            return node;
        }
        return node.next ? this.checkNext(node.next,comparator) : null;
    }

}