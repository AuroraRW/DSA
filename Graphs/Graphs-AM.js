class Graph {
    constructor(size) {
      this.numberOfNodes = size;
      this.adjacencyMatrix = Array.from({ length: size }, () => Array(size).fill(0));
    }
  
    addEdge(node1, node2) {
      const index1 = parseInt(node1);
      const index2 = parseInt(node2);
  
      // For an undirected graph, we need to mark both [node1][node2] and [node2][node1]
      this.adjacencyMatrix[index1][index2] = 1;
      this.adjacencyMatrix[index2][index1] = 1;
    }
  
    showConnections() {
      console.log("Adjacency Matrix:");
      for (let i = 0; i < this.numberOfNodes; i++) {
        console.log(this.adjacencyMatrix[i].join(" "));
      }
    }
  }
  
  const myGraph = new Graph(7); // Assuming 7 nodes labeled from 0 to 6
  myGraph.addEdge("3", "1");
  myGraph.addEdge("3", "4");
  myGraph.addEdge("4", "2");
  myGraph.addEdge("4", "5");
  myGraph.addEdge("1", "2");
  myGraph.addEdge("1", "0");
  myGraph.addEdge("0", "2");
  myGraph.addEdge("6", "5");
  
  myGraph.showConnections();