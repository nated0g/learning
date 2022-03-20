import LinkedList from "./linked-list.js";

export default class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }
  enqueue(value) { 
    this.linkedList.append(value);
  }
  dequeue() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }
  peek() {
    if (!this.linkedList.head) {
      return null;
    }
    return this.linkedList.head.value;
  }
  isEmpty() {
    return !this.linkedList.head;
  }
  toString(callback) {
    return this.linkedList.toString(callback);
  }
}