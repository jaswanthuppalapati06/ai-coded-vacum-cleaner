# DustBot – Intelligent Autonomous Cleaning Agent
### AI-Powered Autonomous Vacuum Cleaner Robotics Simulation & Control Dashboard
**Designed for College AIML Project Presentation, Viva Voce & Capstone Demonstration**

---

## 📌 Executive Summary
**DustBot** is a modern, interactive, AI-powered autonomous robotics dashboard that demonstrates how an intelligent mobile vacuum cleaning agent perceives its environment, evaluates priority cleaning targets, plans collision-free paths using graph search algorithms, and autonomously cleans room layouts.

Unlike conventional commercial robotic vacuums that rely on inefficient random bounce-and-turn (stochastic) patterns, DustBot operates as a **Goal-Driven Autonomous Agent** implementing Russell & Norvig's classic closed-loop cognitive paradigm:
$$\text{PERCEIVE} \longrightarrow \text{THINK} \longrightarrow \text{PLAN} \longrightarrow \text{ACT} \longrightarrow \text{VERIFY}$$

---

## 🚀 Key Features

### 1. Futuristic Cyber Robotics Control Dashboard
- **Theme**: High-tech obsidian & slate palette with glowing neon cyan, emerald, amber, and purple HUD indicators.
- **Top HUD**: Real-time agent state, active search algorithm, live battery drain indicator, dust collection progress counter, and procedural audio synthesis toggle.
- **5-Tab Navigation**:
  1. **Simulation Dashboard**: Full interactive 2D room simulation, live telemetry, and control pad.
  2. **Algorithm Comparison Lab**: Side-by-side benchmark comparing BFS, DFS, A*, and Dijkstra.
  3. **AI Decision-Making Panel**: Visual 5-stage pipeline with live streaming activity logs.
  4. **Hardware Monitoring Panel**: Simulated microcontroller and sensor telemetry testbench.
  5. **Presentation Mode**: 8-section interactive slide deck designed for college project defense.

### 2. Main 2D Room Grid Simulation
- **16 × 16 Matrix (256 Cells)**:
  - 🔵 **Blue Icon**: Mobile robot agent with directional heading arrow, lidar turret, and vacuum suction vortex.
  - 🟠 **Orange Dots**: Dust particles with pulsing glow and intensity.
  - ⬛ **Grey Blocks**: Furniture and wall obstacles with collision bumpers.
  - 🟢 **Green Cells**: Sanitized / cleaned floor area with path history trail.
  - ⬜ **Dark / White Cells**: Unexplored / uncleaned room territory.
- **Visual Overlays**:
  - Toggle **Planned Path** (cyan breadcrumb trail).
  - Toggle **Explored / Visited Frontier** (purple search wavefront).
  - Toggle **Sensor Cones** (ultrasonic sonar beam).
- **Interactive Tools**:
  - Click to add/remove obstacles (draw walls).
  - Click to drop dust particles anywhere.
  - Click to reposition robot docking coordinates.
  - Randomize dust button.

### 3. AI Search Algorithms Comparison
DustBot implements working, mathematically authentic implementations of four foundational pathfinding algorithms:

| Algorithm | Paradigm | Heuristic | Optimality | Time Complexity | Role in Robotics |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **A\* Search (Default)** | Informed Best-First | Manhattan $h(n) = \|\Delta x\| + \|\Delta y\|$ | **Guaranteed Shortest** | $O(b^d)$ | Gold standard. Finds shortest path with minimal node expansion. |
| **Dijkstra's Algorithm** | Uniform Cost Search | None ($h(n) = 0$) | **Guaranteed Shortest** | $O(V + E \log V)$ | Explores radially outward in all directions; optimal but evaluates redundant nodes. |
| **BFS (Breadth-First)** | FIFO Wavefront | None (Queue) | **Guaranteed Shortest** | $O(V + E)$ | Shortest path on unweighted grids, but uniform expansion increases compute time. |
| **DFS (Depth-First)** | LIFO Stack Dive | None (Stack) | **Suboptimal (Winding)** | $O(V + E)$ | Dives deep into paths before backtracking; causes highly erratic, inefficient paths. |

### 4. Closed-Loop Autonomous Agent Cycle
- **PERCEIVE**:
  - Ultrasonic sensor array measures 4-directional clearance (`front`, `right`, `back`, `left`).
  - Optical dust sensor detects particulate density in $\mu\text{g/m}^3$ and analog voltage.
- **THINK**:
  - Cognitive engine evaluates remaining dust targets and selects nearest candidate based on spatial distance.
- **PLAN**:
  - Runs selected search algorithm (A*, Dijkstra, BFS, DFS) to calculate shortest collision-free waypoints.
- **ACT**:
  - Wheels drive robot along path; 12V high-torque vacuum motor engages (18,500 RPM) upon arrival.
- **VERIFY**:
  - Sensor verifies zero particulate; cell transitions to cleaned (green); telemetry counters increment.

### 5. Hardware Monitoring Testbench (Simulated)
Clearly labeled as a software testbench for academic demonstration:
- **MCU**: ESP32-WROOM-32 @ 240MHz (Dual-Core Xtensa LX6, I2C Fast Mode).
- **Obstacle Sensor**: 4x HC-SR04 Ultrasonic Sonar units with real-time **HTML5 Canvas 360° Radar Scanner**.
- **Dust Sensor**: Sharp GP2Y1010AU0F (analog infrared phototransistor).
- **Motors**: Dual DC wheel motors driven by L298N H-Bridge + 12V BLDC suction turbine.
- **Power**: 3S LiPo 11.1V 2200mAh battery with Coulomb-counting discharge curve.

### 6. College Viva / Presentation Deck
Contains 8 structured sections matching college project evaluation rubrics:
1. **Problem Statement**
2. **Proposed Solution**
3. **System Architecture**
4. **Working Principle**
5. **AI Search Algorithms**
6. **Hardware Components**
7. **Software Technologies**
8. **Future Enhancements**

---

## 🛠️ Technology Stack
- **Frontend Framework**: React 18 (Hooks: `useState`, `useEffect`, `useCallback`, `useMemo`, `useRef`)
- **Styling**: Tailwind CSS 3.0 (Custom Cyber Palette, HUD Card Backdrop Blur, Glowing Shadows)
- **Programming Language**: Modern JavaScript (ES6+)
- **Graphics & Radar**: HTML5 Canvas (60fps rotating phosphor sweep) + Vector SVG
- **Audio Synthesizer**: Web Audio API (real-time procedural audio synthesis for motor, suction, sonar, and chimes)
- **Architecture**: Modular, zero-dependency standalone execution (no build tools required to launch!)

---

## 💻 How to Run the Project

### Method 1: Instant Launch (Zero Setup Required)
1. Double-click **`launch.bat`** (or simply double-click **`index.html`**).
2. The dashboard will instantly open in your default web browser (Chrome, Edge, Firefox, Brave).
3. No Node.js installation or `npm install` command required!

### Method 2: Local Web Server (Optional)
If you prefer running through a local development server:
```bash
# Using Python
python -m http.server 3000

# Using Node.js (npx)
npx serve .
```
Then visit `http://localhost:3000` in your browser.

---

## 🎮 How to Demonstrate in College Viva

1. **Start the Autonomous Cleaning**:
   - Click the bright **`START CLEANING`** button in the header.
   - Observe how DustBot automatically targets the nearest dust particle, plans a path with cyan breadcrumbs, travels along the path, engages the suction turbine, sanitizes the cell to green, and proceeds to the next target.

2. **Demonstrate Algorithm Superiority**:
   - Navigate to **`2. ALGORITHM COMPARISON LAB`**.
   - Click **`RUN 4-WAY BENCHMARK TEST`**.
   - Show the professors that **A\*** explores up to **75% fewer nodes** than BFS or Dijkstra while achieving the identical optimal path length.
   - Explain why **DFS** fails to provide optimal paths and produces winding, inefficient movements.

3. **Demonstrate Obstacle Avoidance & Custom Maps**:
   - Switch the room preset dropdown to **`Office Cubicle Maze`** or **`Living Room Layout`**.
   - Select the **`Add/Remove Obstacle`** tool and click on the grid to create custom walls in real time.
   - Watch the robot dynamically route around newly placed walls without getting trapped!

4. **Showcase Hardware & Sensor Simulation**:
   - Point out the **360° Ultrasonic Radar Canvas** showing real-time sweep beams and obstacle blips.
   - Highlight the **GP2Y1010AU0F Dust Sensor** voltage jumping from $0.48\text{V}$ to $3.85\text{V}$ when suctioning dust.

5. **Present the Capstone Slides**:
   - Click **`5. PRESENTATION MODE`** to project the 8-slide presentation deck directly to the viva evaluators.

---

## 📚 Viva Q&A Reference Guide

**Q1: Why is A\* preferred over Dijkstra's algorithm for mobile cleaning robots?**  
> *Answer:* Dijkstra's algorithm is uninformed ($h(n) = 0$) and explores radially outward in all directions, evaluating many unnecessary states. A* incorporates a heuristic (e.g., Manhattan distance $h(n) = |\Delta x| + |\Delta y|$) that guides the search directly toward the target dust coordinate, exploring significantly fewer nodes and saving computational power and memory.

**Q2: Why is DFS not suitable for vacuum pathfinding?**  
> *Answer:* Depth-First Search explores deeply along a single branch before backtracking. It does not guarantee the shortest path, leading to long, winding, erratic movements that waste battery power and cause mechanical wear.

**Q3: What heuristic function is used, and is it admissible?**  
> *Answer:* DustBot uses the Manhattan distance heuristic $h(n) = |x_1 - x_2| + |y_1 - y_2|$ because the robot moves in 4 orthogonal grid directions (North, South, East, West). In an unweighted grid with unit step costs, the Manhattan distance never overestimates the actual cost to reach the target, making it strictly **admissible** and **consistent**, which guarantees that A* will return the optimal shortest path.

**Q4: How does the agent handle dynamic obstacles?**  
> *Answer:* The robot continually perceives its immediate environment via 4-direction ultrasonic raycasting. If an obstacle blocks its projected trajectory, the agent re-enters the `THINK` and `PLAN` stages to compute an alternative path.

---

## 📄 License
This project is open-source and created for academic demonstration and robotics education.
Released under the **MIT License**.
