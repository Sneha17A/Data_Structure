class Graph{
    constructor(){
        this.numberofnodes = 0;
        this.adjacentlist = {};
    }
    addvertex(node){
        this.adjacentlist[node] = [];
        this.numberofnodes++;
    }
    addedges(node1,node2){
        this.adjacentlist[node1].push(node2);
        this.adjacentlist[node2].push(node1);
    }
}

var my_graph = new Graph();
my_graph.addvertex('0');
my_graph.addvertex('1');
my_graph.addvertex('2');
my_graph.addvertex('3');
my_graph.addvertex('4');
my_graph.addvertex('5');
my_graph.addvertex('6');
my_graph.addedges('3', '1');
my_graph.addedges('3', '4');
my_graph.addedges('4', '2');
my_graph.addedges('4', '5');
my_graph.addedges('1', '2');
my_graph.addedges('1', '0');
my_graph.addedges('0', '2');
my_graph.addedges('6', '5');
console.log(my_graph);