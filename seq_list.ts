class SeqList {
    public maxSize:number;
    private readonly data:Array<number>;
    private n:number;
    constructor(num:number) {
        this.maxSize = num;
        this.data = new Array<number>();
        this.n = 0;
    }

    get length(): number {
        return this.n;
    }

    public insert(i:number, ele:number) {
        const len = this.data.length;
        if (len == this.maxSize) {
            console.log('max size');
            return;
        }

        if (i < 1 || i > this.n + 1) {
            console.log('invalid');
            return;
        }

        for(let j = len; j>= i; j--) {
            this.data[j] = this.data[j-1];
        }

        this.data[i-1] = ele;
        this.n++;
    }

    public delete(i:number) {
        const len = this.data.length;

        if (i > len || i == 0) {
            console.log("invalid");
            return;
        }

        for (let j = i; j <= this.n; j++) {
            this.data[j-1] = this.data[j];
        }
        this.n--;
    }
}

const seqList = new SeqList(10);

console.log(seqList.length);
seqList.insert(1, 1);
seqList.insert(1, 2);
seqList.insert(1, 3);
seqList.insert(1, 4);

console.log(seqList.length);
seqList.delete(1);
console.log(seqList.length);
