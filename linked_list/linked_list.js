let Node = require('./node.js')

let LinkedList = function(head){
  this.head = head;
  this.size = 1;
}

LinkedList.prototype.add = function(newNode) {
  // iterate through the linked list to find the null node (tail)
  // reference the previous node and change the next property of that to the new node
  let currentNode = this.head;
  while(currentNode.next !== null){
    currentNode = currentNode.next;
  }
  currentNode.next = newNode;
  this.size += 1;
}

LinkedList.prototype.allValues = function(){
  let result = [];
  let currentNode = this.head;
  while(currentNode.next !== null){
    result.push(currentNode.val);
    currentNode = currentNode.next;
  }
  result.push(currentNode.val)
  return result;
}
/*
insert function
loop through the list to find the position
find the node of the position entered 
find the node of the position.next 
point the position node to the new node
new node.next should point to original position.next 
*/

LinkedList.prototype.insert = function(position, newNode) {
  
  // some logic to return null
  if (this.size < position) {

    return null
  }
  
  let currentNode = this.head;
  let currentPosition = 1;
  
  while(currentNode.next !== null) {
    if (currentPosition === position) {
      let nextNode = currentNode.next;
      currentNode.next = newNode;
      newNode.next = nextNode;
      
      this.size++
    }
    currentPosition++;
    currentNode = currentNode.next
  }
}

// node1 -> null size of 1

LinkedList.prototype.deleteEnd = function(){
  let currentNode = this.head
  
  if(this.size == 1){
    this.head = null;
    this.size = 0;
    return;
  }
  
  while(currentNode.next !== null) { 
    
    let nextNode = currentNode.next  // this will be null if size 1
    let afterNextNode = nextNode.next // this will be undefined if size 1
    
    if(afterNextNode == null){

      currentNode.next = null;
      this.size--;
      return;
    }
    
    currentNode = currentNode.next;
  }
}


module.exports = LinkedList;