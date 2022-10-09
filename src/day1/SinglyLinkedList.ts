type Node<T> = {
  value: T;
  next?: Node<T>;
};
export default class SinglyLinkedList<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  prepend(item: T): void {
    const newNode: Node<T> = {
      value: item,
    };

    if (this.head === undefined) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = undefined;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  insertAt(item: T, idx: number): void {
    if (idx - 1 > this.length) {
      console.error("Provided index is out of bounds of the linked list");
      return;
    }

    const newNode: Node<T> = {
      value: item,
    };
    let currNode = this.head as Node<T>;

    for (let i = 0; i < idx; i++) {
      if (currNode.next !== undefined) {
        currNode = currNode.next;
      }
    }

    newNode.next = currNode.next;
    currNode.next = newNode;

    this.length++;
  }

  append(item: T): void {
    const newNode: Node<T> = {
      value: item,
    };

    if (this.tail === undefined) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = undefined;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  remove(item: T): T | undefined {
    if (this.head !== undefined) {
      let currNode: Node<T> | undefined = this.head;
      let prevNode: Node<T> | undefined = undefined;
      for (let i = 0; i < this.length; i++) {
        if (currNode?.value === item) {
          if (i === 0) {
            const targetNode = currNode;
            this.head = targetNode.next;
            this.length--;
            return targetNode.value;
          } else if (i === this.length - 1) {
            const targetNode = currNode;
            (prevNode as Node<T>).next = undefined;
            this.tail = prevNode;
            this.length--;
            return targetNode.value;
          } else {
            const targetNode = currNode;
            (prevNode as Node<T>).next = currNode.next;
            this.length--;
            return targetNode.value;
          }
        }
        prevNode = currNode;
        currNode = currNode?.next;
      }
    }
    return undefined;
  }

  get(idx: number): T | undefined {
    if (idx - 1 > this.length) {
      console.error(
        `index: ${idx} is outside of the bounds of the linked list`,
      );
      return undefined;
    }

    if (this.head !== undefined) {
      let currNode = this.head;
      for (let i = 0; i < idx; i++) {
        currNode = currNode.next as Node<T>;
      }
      return currNode.value;
    }

    return undefined;
  }

  removeAt(idx: number): T | undefined {
    if (idx - 1 > this.length) {
      console.error(
        `index: ${idx} is outside of the bounds of the linked list`,
      );
      return undefined;
    }

    if (this.head !== undefined) {
      if (idx === 0) {
        const targetNode = this.head;
        this.head = targetNode.next;
        this.length--;
        return targetNode.value;
      }
      let currNode = this.head;
      let prevNode: Node<T> | undefined = undefined;

      for (let i = 0; i < idx; i++) {
        prevNode = currNode;
        currNode = currNode.next as Node<T>;
      }

      if (prevNode !== undefined) {
        prevNode.next = currNode.next;
        if (prevNode.next === undefined) {
          this.tail = prevNode;
        }
      }
      this.length--;
      return currNode.value;
    }
    return undefined;
  }
}
