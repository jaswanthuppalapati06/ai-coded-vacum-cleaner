/**
 * DustBot AI Search Algorithms
 * Implementations of BFS, DFS, A*, and Dijkstra's Algorithm
 * Designed for 2D Grid Autonomous Mobile Robotics
 */

export const GRID_SIZE = 16;
export const CELL_EMPTY = 0;
export const CELL_CLEANED = 1;
export const CELL_OBSTACLE = 2;
export const CELL_DUST = 3;

export const DIRECTIONS = [
  [-1, 0], // North (dy: -1, dx: 0)
  [0, 1],  // East  (dy: 0, dx: 1)
  [1, 0],  // South (dy: 1, dx: 0)
  [0, -1]  // West  (dy: 0, dx: -1)
];

export const key = (y, x) => `${y},${x}`;

export const isValid = (y, x, grid) => {
  return (
    y >= 0 &&
    y < GRID_SIZE &&
    x >= 0 &&
    x < GRID_SIZE &&
    grid[y][x] !== CELL_OBSTACLE
  );
};

export const manhattanDistance = (y1, x1, y2, x2) => {
  return Math.abs(y1 - y2) + Math.abs(x1 - x2);
};

/**
 * 1. A* Search (A-Star)
 * Informed best-first search using f(n) = g(n) + h(n)
 * Heuristic h(n): Manhattan distance to target
 * Optimal and complete for grid navigation.
 */
export function aStar(start, target, grid) {
  const startTime = performance.now();
  const startKey = key(start.y, start.x);
  const targetKey = key(target.y, target.x);

  if (startKey === targetKey) {
    return { path: [start], visitedNodes: [], nodesExplored: 0, timeMs: 0.1 };
  }

  const openSet = [{ ...start, g: 0, h: manhattanDistance(start.y, start.x, target.y, target.x), f: 0 }];
  openSet[0].f = openSet[0].g + openSet[0].h;

  const gScore = { [startKey]: 0 };
  const cameFrom = {};
  const visitedOrder = [];
  const inClosedSet = new Set();

  while (openSet.length > 0) {
    let lowestIdx = 0;
    for (let i = 1; i < openSet.length; i++) {
      if (openSet[i].f < openSet[lowestIdx].f || (openSet[i].f === openSet[lowestIdx].f && openSet[i].h < openSet[lowestIdx].h)) {
        lowestIdx = i;
      }
    }
    const current = openSet.splice(lowestIdx, 1)[0];
    const currKey = key(current.y, current.x);

    if (inClosedSet.has(currKey)) continue;
    inClosedSet.add(currKey);
    visitedOrder.push({ y: current.y, x: current.x });

    if (current.y === target.y && current.x === target.x) {
      const path = [];
      let curr = currKey;
      while (curr) {
        const [y, x] = curr.split(',').map(Number);
        path.unshift({ y, x });
        curr = cameFrom[curr];
      }
      const endTime = performance.now();
      return {
        path,
        visitedNodes: visitedOrder,
        nodesExplored: visitedOrder.length,
        timeMs: Math.max(0.1, Number((endTime - startTime).toFixed(2)))
      };
    }

    for (const [dy, dx] of DIRECTIONS) {
      const ny = current.y + dy;
      const nx = current.x + dx;
      const nKey = key(ny, nx);

      if (!isValid(ny, nx, grid) || inClosedSet.has(nKey)) continue;

      const tentativeG = gScore[currKey] + 1;
      if (gScore[nKey] === undefined || tentativeG < gScore[nKey]) {
        cameFrom[nKey] = currKey;
        gScore[nKey] = tentativeG;
        const h = manhattanDistance(ny, nx, target.y, target.x);
        const f = tentativeG + h;
        
        const existingOpen = openSet.find(n => n.y === ny && n.x === nx);
        if (existingOpen) {
          existingOpen.g = tentativeG;
          existingOpen.f = f;
        } else {
          openSet.push({ y: ny, x: nx, g: tentativeG, h, f });
        }
      }
    }
  }

  const endTime = performance.now();
  return { path: [], visitedNodes: visitedOrder, nodesExplored: visitedOrder.length, timeMs: Number((endTime - startTime).toFixed(2)) };
}

/**
 * 2. Dijkstra's Algorithm
 * Uniform cost search prioritizing lowest cumulative path cost g(n)
 * Equivalent to A* with h(n) = 0.
 */
export function dijkstra(start, target, grid) {
  const startTime = performance.now();
  const startKey = key(start.y, start.x);
  const targetKey = key(target.y, target.x);

  if (startKey === targetKey) {
    return { path: [start], visitedNodes: [], nodesExplored: 0, timeMs: 0.1 };
  }

  const distances = { [startKey]: 0 };
  const pq = [{ ...start, dist: 0 }];
  const cameFrom = {};
  const visitedOrder = [];
  const settled = new Set();

  while (pq.length > 0) {
    pq.sort((a, b) => a.dist - b.dist);
    const current = pq.shift();
    const currKey = key(current.y, current.x);

    if (settled.has(currKey)) continue;
    settled.add(currKey);
    visitedOrder.push({ y: current.y, x: current.x });

    if (current.y === target.y && current.x === target.x) {
      const path = [];
      let curr = currKey;
      while (curr) {
        const [y, x] = curr.split(',').map(Number);
        path.unshift({ y, x });
        curr = cameFrom[curr];
      }
      const endTime = performance.now();
      return {
        path,
        visitedNodes: visitedOrder,
        nodesExplored: visitedOrder.length,
        timeMs: Math.max(0.1, Number((endTime - startTime).toFixed(2)))
      };
    }

    for (const [dy, dx] of DIRECTIONS) {
      const ny = current.y + dy;
      const nx = current.x + dx;
      const nKey = key(ny, nx);

      if (!isValid(ny, nx, grid) || settled.has(nKey)) continue;

      const newDist = distances[currKey] + 1;
      if (distances[nKey] === undefined || newDist < distances[nKey]) {
        distances[nKey] = newDist;
        cameFrom[nKey] = currKey;
        pq.push({ y: ny, x: nx, dist: newDist });
      }
    }
  }

  const endTime = performance.now();
  return { path: [], visitedNodes: visitedOrder, nodesExplored: visitedOrder.length, timeMs: Number((endTime - startTime).toFixed(2)) };
}

/**
 * 3. Breadth-First Search (BFS)
 * FIFO queue level-by-level wavefront search.
 * Guarantees shortest path in unweighted uniform grids.
 */
export function bfs(start, target, grid) {
  const startTime = performance.now();
  const startKey = key(start.y, start.x);
  const targetKey = key(target.y, target.x);

  if (startKey === targetKey) {
    return { path: [start], visitedNodes: [], nodesExplored: 0, timeMs: 0.1 };
  }

  const queue = [{ y: start.y, x: start.x }];
  const cameFrom = {};
  const visited = new Set([startKey]);
  const visitedOrder = [];

  while (queue.length > 0) {
    const current = queue.shift();
    const currKey = key(current.y, current.x);
    visitedOrder.push({ y: current.y, x: current.x });

    if (current.y === target.y && current.x === target.x) {
      const path = [];
      let curr = currKey;
      while (curr) {
        const [y, x] = curr.split(',').map(Number);
        path.unshift({ y, x });
        curr = cameFrom[curr];
      }
      const endTime = performance.now();
      return {
        path,
        visitedNodes: visitedOrder,
        nodesExplored: visitedOrder.length,
        timeMs: Math.max(0.1, Number((endTime - startTime).toFixed(2)))
      };
    }

    for (const [dy, dx] of DIRECTIONS) {
      const ny = current.y + dy;
      const nx = current.x + dx;
      const nKey = key(ny, nx);

      if (isValid(ny, nx, grid) && !visited.has(nKey)) {
        visited.add(nKey);
        cameFrom[nKey] = currKey;
        queue.push({ y: ny, x: nx });
      }
    }
  }

  const endTime = performance.now();
  return { path: [], visitedNodes: visitedOrder, nodesExplored: visitedOrder.length, timeMs: Number((endTime - startTime).toFixed(2)) };
}

/**
 * 4. Depth-First Search (DFS)
 * LIFO stack branch-diving search.
 * Does NOT guarantee shortest path; creates winding exploration patterns.
 */
export function dfs(start, target, grid) {
  const startTime = performance.now();
  const startKey = key(start.y, start.x);
  const targetKey = key(target.y, target.x);

  if (startKey === targetKey) {
    return { path: [start], visitedNodes: [], nodesExplored: 0, timeMs: 0.1 };
  }

  const stack = [{ y: start.y, x: start.x }];
  const cameFrom = {};
  const visited = new Set();
  const visitedOrder = [];

  while (stack.length > 0) {
    const current = stack.pop();
    const currKey = key(current.y, current.x);

    if (visited.has(currKey)) continue;
    visited.add(currKey);
    visitedOrder.push({ y: current.y, x: current.x });

    if (current.y === target.y && current.x === target.x) {
      const path = [];
      let curr = currKey;
      while (curr) {
        const [y, x] = curr.split(',').map(Number);
        path.unshift({ y, x });
        curr = cameFrom[curr];
      }
      const endTime = performance.now();
      return {
        path,
        visitedNodes: visitedOrder,
        nodesExplored: visitedOrder.length,
        timeMs: Math.max(0.1, Number((endTime - startTime).toFixed(2)))
      };
    }

    for (const [dy, dx] of DIRECTIONS) {
      const ny = current.y + dy;
      const nx = current.x + dx;
      const nKey = key(ny, nx);

      if (isValid(ny, nx, grid) && !visited.has(nKey)) {
        if (!cameFrom[nKey]) {
          cameFrom[nKey] = currKey;
        }
        stack.push({ y: ny, x: nx });
      }
    }
  }

  const endTime = performance.now();
  return { path: [], visitedNodes: visitedOrder, nodesExplored: visitedOrder.length, timeMs: Number((endTime - startTime).toFixed(2)) };
}

export const Pathfinder = {
  aStar,
  dijkstra,
  bfs,
  dfs,
  run: (algoId, start, target, grid) => {
    switch (algoId) {
      case 'ASTAR': return aStar(start, target, grid);
      case 'DIJKSTRA': return dijkstra(start, target, grid);
      case 'BFS': return bfs(start, target, grid);
      case 'DFS': return dfs(start, target, grid);
      default: return aStar(start, target, grid);
    }
  }
};
