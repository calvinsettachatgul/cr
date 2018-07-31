let Node = require('./node.js')
let LinkedList = require('./linked_list.js')

// expect creation of a Node to have value val and next equal to null
let node1 = new Node(1);

console.log(node1.val === 1);
console.log(node1.next === null);

// expect LinkedList to have a head and a size
// when constructed the first node will be the head
//expect LinkedList to have one Node child

let node2 = new Node(2); 
let linkedList1 = new LinkedList(node2);

console.log(linkedList1.head === node2);
console.log(linkedList1.head.val === 2);
console.log(linkedList1.head.next === null);
console.log(linkedList1.size === 1);

// expect function add to add another node to the end and increase the size of the linkedlist
let node3 = new Node(3)
linkedList1.add(node3)
console.log(linkedList1.size == 2);
console.log(linkedList1.head.next.val == 3);
console.log(linkedList1.head.next == node3);

// expect allValues to return an array with all the node values
// console.log(linkedList1.allValues() === [2,3])
console.log(linkedList1.allValues()[0] == 2)
console.log(linkedList1.allValues()[1] == 3)
console.log(JSON.stringify(linkedList1.allValues()) === JSON.stringify([2,3]))


// expect insert to take a position (eg 1, 2 3) and a node and insert after that position

let node4 = new Node(4)
linkedList1.insert(1, node4)
let allValues_result = JSON.stringify(linkedList1.allValues())
let expected = JSON.stringify([2,4,3])
console.log( expected === allValues_result)

// expect insert to increase the size of a linked list
console.log("expect insert to increase size of linked list")
console.log(linkedList1.size === 3)

// describe insert if position is greater than the size of the linked list return null
expected = null;
let result = linkedList1.insert(5, node4);
console.log("expect insert to return null if position is greater than size")
console.log(result === expected);

console.log(linkedList1.allValues());