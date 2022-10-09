type Node<T> = {
  value: T;
  prev?: Node<T>;
};

export default class Stack<T> {
  public length: number;
  private head?: Node<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    const newNode = { value: item } as Node<T>;
    newNode.prev = this.head;
    this.head = newNode;
    this.length++;
  }
  pop(): T | undefined {
    if (!this.head) {
      return;
    }

    const head = this.head;
    this.head = head.prev;
    this.length--;
    return head.value;
  }
  peek(): T | undefined {
    return this.head?.value;
  }
}
