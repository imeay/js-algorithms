import { LinkedListNode } from './linked_list_node';
interface ILinkedListNode<T> {
    data:T;
    next:ILinkedListNode<T>
}
class LinkedList<T> {

    private readonly val:T;
    public head:ILinkedListNode<T>

    constructor(value:T) {
        this.val = value;
    }


    public create2(data:T) {
        let rear, s;
        this.head = new LinkedListNode(this.val, null);
        rear = this.head;
        s = new LinkedListNode(data, null);
        rear.next = s;
        rear = s;
        rear.next = null;

    }

    public length() {
        let j = 0;
        let p = this.head.next;
        while (p != null) {
            j++;
            p = p.next;
        };
        return j;
    }

    public get(i:number) {
        let j = 0;
        if (i ==0) { return this.head}
        if (i< 0) {return null}
        let p = this.head.next;
        while (p != null) {
            j++;
            if (j == i) break;
            p = p.next;
        }
        return p;
    }

    public locate(data:T) {
        let p = this.head.next;
        while (p != null) {
            if (p.data == data) {
                break;
            }
            p = p.next;
        }
        return p;
    }

    public insert(x:T, i:number) {
        let q = this.get(i - 1);

        let s = new LinkedListNode(x,null);
        s.next = q.next;
        q.next = s;
        return 1;
    }

    public delete(i:number) {
        let q = this.get(i - 1);
        let p = q.next;
        q.next = p.next;
        // @ts-ignore
        p = null;
        return 1;
    }

}

let linkedList = new LinkedList(0);

linkedList.create2(1);

console.log(`data: `, linkedList.head);
console.log(linkedList.get(1));
console.log(linkedList.insert(6,1));
console.log(linkedList.insert(7,2));

console.log(linkedList.insert(8,3));

console.log(linkedList.head);
console.log((linkedList.locate(2)));
linkedList.delete(3);

