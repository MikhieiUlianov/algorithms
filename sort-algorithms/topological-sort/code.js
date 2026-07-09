function BFSTopologicalSort(graph) {
  const inDegree = {};
  const queue = [];
  const order = [];

  for (let vertex in graph) inDegree[vertex] = 0;

  for (let vertex in graph)
    for (let neighbor of graph[vertex]) inDegree[neighbor]++;

  // Find all starting nodes with absolutely zero prerequisites (In-Degree === 0)
  for (let vertex in inDegree) if (inDegree[vertex] === 0) queue.push(vertex);

  while (queue.length > 0) {
    const current = queue.shift();
    order.push(current);

    for (let neighbor of graph[current]) {
      inDegree[neighbor]--;

      // If this neighbor has no more prerequisites remaining, unlock it!
      if (inDegree[neighbor] === 0) queue.push(neighbor);
    }
  }

  if (order.length !== Object.keys(graph).length)
    throw new Error(
      "Cycle detected! This graph contains a loop, so a topological sort is impossible.",
    );

  return order;
}

const projectDependencies = {
  HTML: ["CSS", "JavaScript"],
  CSS: ["Design System"],
  JavaScript: ["React", "Design System"],
  React: ["Deploy App"],
  "Design System": ["Deploy App"],
  "Deploy App": [],
};

const executionSchedule = BFSTopologicalSort(projectDependencies);
// Output: [ 'HTML', 'CSS', 'JavaScript', 'React', 'Design System', 'Deploy App' ]

function DFSTopologicalSortDFS(graph) {
  const visited = {};
  const order = [];

  function explore(vertex) {
    visited[vertex] = true;

    for (let neighbor of graph[vertex])
      if (!visited[neighbor]) explore(neighbor);

    order.unshift(vertex);
  }

  for (let vertex in graph) if (!visited[vertex]) explore(vertex);

  return order;
}
