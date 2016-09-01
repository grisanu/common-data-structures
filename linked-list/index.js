'use strict';

// create linked list constructor
const LinkedList = function () {
  this.head = null;
  this.tail = null;
};

const Node = function (value) {
  this.value = value;
  this.next = null;
  this.prev = null;
};

// Add to tail
LinkedList.prototype.addToTail = function (value) {
  const newNode = new Node(value);

  if (this.head) { // head exists
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  } else { // head === null
    this.head = newNode;
    this.tail = newNode;
  }
};

// remove head
LinkedList.prototype.removeHead = function () {
  const removed = this.head;

  if (this.head || this.head !== this.tail) { // head exists
    this.head = this.head.next;
    return removed;
  }

  this.head = null;
  this.tail = null;

  return null;
};

// contains
LinkedList.prototype.contains = function (value) {
  let curr = this.head;

  while (curr) {
    if (curr.value === value) { return true; }
    curr = curr.next;
  }

  return false;
};

module.exports = LinkedList;