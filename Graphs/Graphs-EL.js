class Graph {
    constructor() {
      this.numberOfNodes = 0;
      this.edges = []; // Stores the list of edges
    }
  
    addVertex(node) {
      this.numberOfNodes++;
    }
  
    addEdge(node1, node2) {
      // Add the edge to the list of edges
      this.edges.push([node1, node2]);
    }
  
    showConnections() {
      console.log("Edge List:");
      for (let edge of this.edges) {
        console.log(`${edge[0]} -- ${edge[1]}`);
      }
    }
  }
  
  const myGraph = new Graph();
  myGraph.addVertex("0");
  myGraph.addVertex("1");
  myGraph.addVertex("2");
  myGraph.addVertex("3");
  myGraph.addVertex("4");
  myGraph.addVertex("5");
  myGraph.addVertex("6");
  
  myGraph.addEdge("3", "1");
  myGraph.addEdge("3", "4");
  myGraph.addEdge("4", "2");
  myGraph.addEdge("4", "5");
  myGraph.addEdge("1", "2");
  myGraph.addEdge("1", "0");
  myGraph.addEdge("0", "2");
  myGraph.addEdge("6", "5");
  
  myGraph.showConnections();