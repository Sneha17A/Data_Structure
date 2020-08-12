class LinkedList{
  constructor(value){
    this.head = {
      value : value,
      next : null
    };
    this.tail = this.head;
    this.length++;
  }
  append(value){
    const newNode = {
      value : value,
      next : null
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value){
    const newNode = {
      value : value,
      next : null
    };
    newNode.tail = this.head;
    this.head = newNode;
    this.length++;
  }
  printList(){
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array;
  }
  insert(index,value){
    if(index>=this.length){
      return this.append(value);
    }

    const newNode = {
      value: value,
      next : null
    }
    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index){
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index){
    const leader = this.traverseToIndex(index-1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
}
let myLinkedList = new LinkedList(27);
myLinkedList.append(24);
myLinkedList.append(25);
myLinkedList.append(26);
myLinkedList.prepend(23)
myLinkedList.insert(3,99);
myLinkedList.remove(2);
console.log(myLinkedList);