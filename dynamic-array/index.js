'use strict';

const DynamicArray = function (size) {
  this.storage = {};
  this.capacity = size; // max capacity
  this.length = 0; // current length

  for (let i = 0; i < size; i++) {
    this.storage[i] = undefined;
  }
};

DynamicArray.prototype.get = function (index) {
  if (index > this.length - 1) {
    throw 'Value out of bounds, cannot access values at index greater than length';
  } else {
    return this.storage[index];
  }
};

DynamicArray.prototype.set = function (index, value) {
  if (index > this.capacity - 1) {
    throw 'Value out of bounds, cannot access values at index greater than capacity';
  } else {
    if (index > this.length - 1) {
      this.length = index - 1;
    }

    this.storage[index] = value;
  }
};

DynamicArray.prototype.push = function (value) {
  if (this.length === this.capacity) { // resize
    this.capacity *= 2;

    for (let i = this.length; i < this.capacity; i++) {
      this.storage[i] = undefined;
    }
  }

  this.storage[this.length] = value;
  this.length++;
};

DynamicArray.prototype.pop = function () {
  const popped = this.storage[this.length - 1];

  this.storage[this.length - 1] = undefined;
  this.length--;
  return popped;
};

DynamicArray.prototype.removeMatched = function (value) {
  const removed = [];

  for (let i in this.storage) {
    if (this.storage[i] === value) {
      removed.push(this.storage[i]);
      this.storage[i] = undefined;
      if (Number(i) === this.length - 1) {
        this.length--;
      }
    }
  }

  return removed;
};

// const aa = new DynamicArray(10);
// console.log(aa);
// aa.push(6);
// console.log(aa);
// aa.set(5,2);
// console.log(aa);