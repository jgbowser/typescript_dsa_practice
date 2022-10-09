type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const newNode: Node<T> = {
      value: item,
    };

    if (this.tail === undefined) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }
  deque(): T | undefined {
    if (this.head !== undefined) {
      const head = this.head;
      this.head = head?.next;
      this.length--;
      if (this.length === 0) {
        this.tail = undefined;
      }
      return head?.value;
    }
    return;
  }
  peek(): T | undefined {
    return this.head?.value;
  }
}
