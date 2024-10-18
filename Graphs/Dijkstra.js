class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(city) {
        this.adjacencyList[city] = [];
    }

    addEdge(city1, city2, travelTime) {
        this.adjacencyList[city1].push({ node: city2, weight: travelTime });
        this.adjacencyList[city2].push({ node: city1, weight: travelTime }); // Since it's undirected
    }

    dijkstra(start) {
        const distances = {};
        const visited = {};
        const previous = {};
        const nodes = Object.keys(this.adjacencyList);

        // Initialize distances and previous
        for (let city of nodes) {
            distances[city] = Infinity;
            previous[city] = null;
        }
        distances[start] = 0;

        // Main loop
        while (Object.keys(visited).length < nodes.length) {
            // Find the unvisited node with the smallest distance
            let minNode = null;
            let minDistance = Infinity;
            for (let city of nodes) {
                if (!visited[city] && distances[city] < minDistance) {
                    minNode = city;
                    minDistance = distances[city];
                }
            }

            // If we cannot find any unvisited node, break out
            if (minNode === null) break;

            // Mark the node as visited
            visited[minNode] = true;

            // Update distances for each neighbor
            for (let neighbor of this.adjacencyList[minNode]) {
                let newDistance = distances[minNode] + neighbor.weight;
                if (newDistance < distances[neighbor.node]) {
                    distances[neighbor.node] = newDistance;
                    previous[neighbor.node] = minNode;
                }
            }
        }

        return { distances, previous };
    }
}

// Example usage with the data from the image:
const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');

g.addEdge('A', 'B', 1);  // A -> B (1 hour)
g.addEdge('A', 'C', 4);  // A -> C (4 hours)
g.addEdge('B', 'C', 2);  // B -> C (2 hours)
g.addEdge('B', 'D', 6);  // B -> D (6 hours)
g.addEdge('C', 'D', 3);  // C -> D (3 hours)
g.addEdge('C', 'E', 5);  // C -> E (5 hours)
g.addEdge('D', 'E', 1);  // D -> E (1 hour)

// Calculate shortest path from city A
const result = g.dijkstra('A');
console.log('Shortest distances from A:', result.distances);
console.log('Previous nodes:', result.previous);