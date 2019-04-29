export class  LinkedListNode<T> {
    public data:T;
    public next:LinkedListNode<T>;
    constructor(value:T, next:LinkedListNode<T>) {
        this.data = value;
        this.next = next;
    }
}