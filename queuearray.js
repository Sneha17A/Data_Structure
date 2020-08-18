class Node{
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  class queue{
    constructor(){
      this.array = [];
    }
    peek(){
      return this.array[this.array.length-1];
    }
    enqueue(value){
      this.array.push(value);
      return this;
    }
    dequeue(){
      this.array.pop();
      return this;
    }
  }
  const myqueue = new queue();
  myqueue.enqueue("apple");
  myqueue.enqueue("orange");
  myqueue.dequeue();
  console.log(myqueue);  