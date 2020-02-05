import store from "./store";

// Linear approach to indexOf
function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

//Binary approach
// start and end are optional arguments, if omitted the function uses the start and end of the array

function binarySearch(array, value, start, end, count) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;
  if (start > end) {
    return -1;
  }
  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end, count);
  if (item == value) {
    return index + console.log(`found it in ${count} tries`);
  } else if (item < value) {
    return binarySearch(array, value, index + 1, end, count + 1);
  } else if (item > value) {
    return binarySearch(array, value, start, index - 1, count + 1);
  }
}

// binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 8);
// starts 0 10, halves the right to 0 4, and then goes through the left and pinpoints it at 3 4
// binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 16);
// starts at 0 10, halfs the left so start is 6, end is 10. then it does the right and then left again where there's a standstill at 7 7

let sortedArray = store.sort();
console.log(sortedArray);

binarySearch(sortedArray, 33, 0, sortedArray.length, 0);

// class BinarySearchTree {
//   constructor(key = null, value = null, parent = null) {
//     this.key = key;
//     this.value = value;
//     this.parent = parent;
//     this.left = null;
//     this.right = null;
//   }
//   dfs(values = []) {
//     // every node gets searched making this O(n)
//     if (this.left) {
//       values = this.left.dfs(values);
//     }
//     values.push(this.value);

//     if (this.right) {
//       values = this.right.dfs(values);
//     }
//     return values;
//   }
//   bfs(tree, values = []) {
//     const queue = new queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)
//     const node = tree.root;
//     queue.enqueue(node);
//     while (queue.length) {
//       const node = queue.dequeue(); // remove from the queue
//       values.push(node.value);

//       if (node.left) {
//         queue.enqueue(node.left); // add left child to the queue
//       }
//       if (node.right) {
//         queue.enqueue(node.right); // add right child to the queue
//       }
//     }
//     return values;
//   }
// }
