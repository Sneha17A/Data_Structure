#linkedlist
class node:
    def __init__(self,data):
        self.data = data
        self.ref = None         #creating node
class linkedlist:
    def __init__(self):
        self.head = None        #creating head   linkedlist created
    def printlinkedlist(self):
        if self.head is None:
            print('linked list is empty')
        else:
            while self.head is not None:
                print(self.head.data,end=' ')
                self.head = self.head.ref       #traverse the linkedlist
    def add_begin(self,data):
        newnode = node(data)
        newnode.ref = self.head
        self.head = newnode     #insert at beginning of the linkedlist
    def add_end(self,data):
        newnode = node(data)
        if self.head is None:
            self.head = newnode
        else:
            n = self.head 
            while n.ref is not None:
                n = n.ref
            n.ref = newnode     #insert at end of the linkedlist
    def add_after(self,data,x):
        n = self.head
        while n is not None:
            if n.data == x:
                break
            n = n.ref
        if n is None:
            print('node is not present in the linkedlist')
        else:
            newnode = node(data)
            newnode.ref = n.ref
            n.ref = newnode      #insert at inbetween of the linkedlist
    def add_before(self,data,x):
        if self.head is None:
            print('linked list is empty')
            return 
        if self.head.data == x:
            newnode = node(data)
            newnode.ref = self.head
            self.head = newnode
            return                        #if x is first node
        n = self.head
        while n is not None:
            if n.ref.data == x:
                break
            n = n.ref
        if n.ref is None:
            print('Node is not found')
        else:
            newnode = node(data)
            newnode.ref = n.ref
            n.ref = newnode             #if x is other than first node
    
    
ll = linkedlist()
ll.add_begin(3)
ll.add_begin(4)
ll.add_end(5)
ll.add_end(10)
ll.add_after(100,5)
ll.add_before(20,100)
ll.printlinkedlist()
