class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    if (this.adjacencyList[v1]) this.adjacencyList[v1].push(v2);
    if (this.adjacencyList[v2]) this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    if (this.adjacencyList[v1])
      this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    if (this.adjacencyList[v2])
      this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(vertex) {
    const newAdjacencyList = {};
    if (!this.adjacencyList[vertex]) return;

    for (const [vertexKey, value] of Object.entries(this.adjacencyList))
      if (vertexKey !== vertex)
        newAdjacencyList[vertexKey] = value.filter(
          (neighbor) => neighbor !== vertex,
        );

    this.adjacencyList = newAdjacencyList;
    return this.adjacencyList;
  }

  DFRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    if (!adjacencyList[start]) return result;

    df(start);

    function df(vertex) {
      if (!vertex) return null;

      visited[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          df(neighbor);
        }
      });
    }

    return result;
  }

  DFIterative(start) {
    if (!this.adjacencyList[start]) return [];

    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  BF(start) {
    if (!this.adjacencyList[start]) return [];

    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}
