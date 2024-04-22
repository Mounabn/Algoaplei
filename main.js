const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
 };
 
 
 function dijkstra(graph, start) {
     const distances = {};
     const visited = new Set();
 
    
     for (let node in graph) {
         distances[node] = Infinity;
     }
     distances[start] = 0;
 
    
     let current = start;
     while (current) {
         let dist = distances[current];
         let neighbors = graph[current];
 
        
         for (let neighbor in neighbors) {
             if (!visited.has(neighbor)) {
                 let newDist = dist + neighbors[neighbor];
                 if (newDist < distances[neighbor]) {
                     distances[neighbor] = newDist;
                 }
             }
         }
 
         visited.add(current);
 
         current = null;
         let smallest = Infinity;
         for (let node in distances) {
             if (!visited.has(node) && distances[node] < smallest) {
                 smallest = distances[node];
                 current = node;
             }
         }
     }
 
     return distances;
 }


 const shortestPathsFromA = dijkstra(graph, 'A');
 console.log(shortestPathsFromA);
 