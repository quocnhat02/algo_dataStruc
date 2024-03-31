class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return !this.head;
  }

  calcLength() {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  insertAtTail(data) {
    const newNode = new Node(data);
    const checkIsEmpty = this.isEmpty();
    if (checkIsEmpty) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  insertAtHead(data) {
    const newNode = new Node(data);
    const checkIsEmpty = this.isEmpty();
    if (checkIsEmpty) {
      this.head = newNode;
    } else {
      const headNode = this.head;
      newNode.next = headNode;
      this.head = newNode;
    }
  }
}

const linked_list = new LinkedList();
console.log(linked_list.isEmpty());

linked_list.insertAtTail(1);
linked_list.insertAtTail(2);
linked_list.insertAtTail(3);
linked_list.insertAtHead(4);
console.log(linked_list);
console.log(linked_list.calcLength());
