import { LinkedList } from "./linked-list";

const defaultBucketsNumber = 32;

export class HashTable {
  constructor(bucketsNumber = defaultBucketsNumber) {
    this.buckets = Array(bucketsNumber)
      .fill(null)
      .map(() => new LinkedList());
  }

  hash(key) {
    let hashCode = 0;

    // Go through all characters and adds their ASCII value to hashCode
    key.split('').forEach((c) => hashCode += c.charCodeAt(0));

    return hashCode % this.buckets.length;
  }

  set(key, value) {
    const keyHash = this.hash(key);
    const bucketLinkedList = this.bucket[keyHash];

    const node = bucketLinkedList.find({
      callback: nodeValue => nodeValue.key === key
    });

    if (!node) {
      bucketLinkedList.append({ key, value });
    } else {
      node.value.value = value;
    }
  }

  get(key) {
    const keyHash = this.hash(key);
    const bucketLinkedList = this.bucket[keyHash];

    const node = bucketLinkedList.find({
      callback: nodeValue => nodeValue.key === key
    });

    return node ? node.value.value : undefined;
  }

  delete(key) {
    const keyHash  = this.hash(key);
    const bucketLinkedList = this.bucket[keyHash];

    const node = bucketLinkedList.find({
      callback: nodeValue => nodeValue.key === key
    });
    if (node) {
      bucket.LinkedList.delete(node.value);
      return true;
    } else {
      return false;
    }

    
  }
}