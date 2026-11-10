/**
 * DustBot Constants & Configuration Settings
 */

export const GRID_SIZE = 16;
export const CELL_EMPTY = 0;    // Dark / Unexplored area
export const CELL_CLEANED = 1;  // Green Cleaned area
export const CELL_OBSTACLE = 2; // Grey Obstacle blocks
export const CELL_DUST = 3;     // Orange Dust dots

export const ALGORITHMS = {
  ASTAR: {
    id: 'ASTAR',
    name: 'A* Search (A-Star)',
    badge: 'Heuristic + Path Cost',
    shortDesc: 'Evaluates f(n) = g(n) + h(n) with Manhattan distance heuristic. Optimal, direct, and shortest path guaranteed.',
    complexity: 'O(b^d)',
    optimality: 'Guaranteed Shortest',
    type: 'Informed / Heuristic'
  },
  DIJKSTRA: {
    id: 'DIJKSTRA',
    name: "Dijkstra's Algorithm",
    badge: 'Uniform Cost Search',
    shortDesc: 'Explores radially by lowest cumulative path cost g(n). Equivalent to A* with h(n)=0; optimal minimum-cost path.',
    complexity: 'O(V + E log V)',
    optimality: 'Guaranteed Shortest',
    type: 'Uninformed / Cost'
  },
  BFS: {
    id: 'BFS',
    name: 'Breadth First Search (BFS)',
    badge: 'FIFO Wavefront',
    shortDesc: 'Explores level-by-level in concentric rings using a FIFO queue. Guarantees shortest path in unweighted grids.',
    complexity: 'O(V + E)',
    optimality: 'Guaranteed Shortest',
    type: 'Uninformed'
  },
  DFS: {
    id: 'DFS',
    name: 'Depth First Search (DFS)',
    badge: 'LIFO Deep Dive',
    shortDesc: 'Dives deeply along branches before backtracking using a LIFO stack. Does NOT guarantee shortest path; forms winding trails.',
    complexity: 'O(V + E)',
    optimality: 'Not Optimal (Suboptimal Winding)',
    type: 'Uninformed / Exploratory'
  }
};

export const PRESET_MAPS = {
  LIVING_ROOM: {
    name: 'Living Room Layout',
    description: 'Sofas, coffee table, entertainment center, with scattered dust clusters',
    obstacles: [
      [2, 2], [2, 3], [2, 4], [2, 5], [2, 6],
      [5, 4], [5, 5], [6, 4], [6, 5],
      [9, 1], [9, 2], [9, 3],
      [12, 10], [12, 11], [13, 10], [13, 11], [14, 10], [14, 11],
      [4, 11], [4, 12], [5, 11], [5, 12]
    ],
    dusts: [
      [1, 1], [1, 7], [3, 4], [4, 7], [7, 2], [8, 6], [7, 12],
      [10, 8], [11, 4], [13, 3], [14, 8], [14, 14], [10, 13], [2, 14]
    ],
    robot: { x: 0, y: 0 }
  },
  OFFICE_MAZE: {
    name: 'Office Cubicle Maze',
    description: 'Challenging partitioned walls and narrow navigation corridors',
    obstacles: [
      [3, 0], [3, 1], [3, 2], [3, 3], [3, 4],
      [3, 7], [3, 8], [3, 9], [3, 10], [3, 11],
      [7, 4], [7, 5], [7, 6], [7, 7], [7, 8], [7, 9], [7, 10], [7, 11], [7, 12], [7, 13],
      [11, 2], [11, 3], [11, 4], [11, 5], [11, 6], [11, 7],
      [11, 10], [11, 11], [11, 12], [11, 13], [11, 14], [11, 15]
    ],
    dusts: [
      [1, 3], [1, 9], [5, 2], [5, 8], [5, 14], [9, 1], [9, 9], [9, 14], [13, 1], [13, 8], [14, 13]
    ],
    robot: { x: 0, y: 0 }
  },
  DUST_FIELD: {
    name: 'Heavy Dust Field',
    description: 'High dust density testbench across an open room',
    obstacles: [
      [4, 4], [4, 11], [11, 4], [11, 11],
      [7, 7], [7, 8], [8, 7], [8, 8]
    ],
    dusts: [
      [1, 2], [1, 5], [1, 9], [1, 13],
      [3, 1], [3, 7], [3, 14],
      [5, 3], [5, 8], [5, 12],
      [7, 1], [7, 5], [7, 10], [7, 14],
      [9, 3], [9, 8], [9, 13],
      [11, 1], [11, 6], [11, 14],
      [13, 2], [13, 7], [13, 11], [14, 4], [14, 9], [14, 13]
    ],
    robot: { x: 0, y: 0 }
  },
  ARENA_CLEAR: {
    name: 'Open Testing Arena',
    description: 'Clean boundary perimeter, optimal for algorithm benchmark tests',
    obstacles: [
      [7, 7], [7, 8], [8, 7], [8, 8]
    ],
    dusts: [
      [2, 2], [2, 13], [13, 2], [13, 13], [7, 3], [7, 12], [3, 7], [12, 7]
    ],
    robot: { x: 0, y: 0 }
  }
};
