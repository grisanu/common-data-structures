# Dynamic Array

1. Built from static arrays
3. Has properties:

  * `length`
2. Has methods with time complexities:

  * `get(index)` - O(1)
  * `set(index, value)` - O(1)
  * `push(value)` - O(1)
  * `pop()` - O(1)
  * `removeMatched(target)` - O(n)

## Implementation

### Representation in Javascript

I decided to represent my `DynamicArray` with `Object` for its constant time access to index values. 

I am aware that each element in `Array` should be occupying consecutive blocks in memory and this is not necessarily guaranteed in this representation. However, without using `Array` I do not think that there is a way in Javascript to guarantee that elements occupy consecutive blocks in memory.

``` Javascript
new DynamicArray(capacity)
```

`DynamicArray` should be interacted with its `get` and `set` methods, accessed with `get()` and assigned with `set()`.

`DynamicArray` has properties `capacity` and `length` where:

  * `capacity` - predefined max holding capacity
  * `length` - representing current largest index occupied

`DynamicArray` is initialized with by assigning all indexes up to `capacity` with a placeholder value, `undefined`.

Once `length === capacity`, `DynamicArray` is resized and `capacity` is doubled.

## Methods

### `removeMatched(target)` - O(n)

Remove all elements in `DynamicArray` with value matching a target

Return removed elements

### `push(value)` - O(1)

Add element to the end of `DynamicArray`, at index `length`

Resize `DynamicArray` if over capacity

### `pop()` - O(1)
Remove element from the end of `DynamicArray`, at index `length`

Return removed element

### `set(index, value)` - O(1)
Assigning/Reassigning element at `index` to be equal to `value`

### `get(index)` - O(1)
Accessing element value at `index`

Return `value`