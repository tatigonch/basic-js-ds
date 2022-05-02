const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let prevNode = l;

 if (l.value == k){
   l.value = l.next.value
   l.next = l.next.next
  } 

 let actualNode = l.next;
 
 function removeNode(actualNode, prevNode){
    if (actualNode.value == k){
      prevNode.next = actualNode.next
    }
  }
 while (actualNode){
    if (actualNode.value == k){      
      removeNode(actualNode, prevNode)
      actualNode = actualNode.next
      } else{
        prevNode = actualNode
        actualNode = actualNode.next
      }    
  }
  return l
}

module.exports = {
  removeKFromList
};
