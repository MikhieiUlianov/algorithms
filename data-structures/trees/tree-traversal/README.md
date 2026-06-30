# Tree Traversal Algorithms

## How It Works (The Mechanics)

Unlike linear data structures (like arrays, linked lists, or queues) which have a single, straightforward path from beginning to end, a tree is non-linear. This means there are multiple paths to explore when visiting its nodes. **Tree traversal** is the process of visiting—systematically—every node in a tree data structure exactly once so that data can be processed, searched, or updated.

Because nodes branch out into left and right subtrees, the order in which you process a node and its children dictates the type of traversal algorithm you are using.

---

## 1. Depth-First Search (DFS) Traversal

Depth-First Search algorithms prioritize exploring as deep down a single branch as possible before backtracking and exploring sibling branches.

There are three primary ways to order the visits, all elegantly implemented using recursion or an explicit stack.

### Pre-order Traversal (Current $

ightarrow$ Left $
ightarrow$ Right)
In **pre-order**, you process the parent node before diving into its subtrees. This is highly useful for creating a structural copy of a tree or serializing a tree structure to be saved and rebuilt later.

- Visit the current node.
- Traverse the left subtree.
- Traverse the right subtree.

[Image of pre-order binary tree traversal algorithm diagram]

### In-order Traversal (Left $

ightarrow$ Current $
ightarrow$ Right)
In **in-order**, you process the left subtree, visit the parent node, and then process the right subtree. When applied to a Binary Search Tree (BST), an in-order traversal visits the nodes in **ascending sorted order**.

- Traverse the left subtree.
- Visit the current node.
- Traverse the right subtree.

[Image of in-order binary tree traversal algorithm diagram]

### Post-order Traversal (Left $

ightarrow$ Right $
ightarrow$ Current)
In **post-order**, you fully explore both the left and right subtrees before finally visiting the parent node. This is heavily used in file systems (e.g., calculating the total disk size of a folder and its sub-folders, as you must know the size of the contents before calculating the folder itself) or in bottom-up tree deletion.

- Traverse the left subtree.
- Traverse the right subtree.
- Visit the current node.

[Image of post-order binary tree traversal algorithm diagram]

---

## 2. Breadth-First Search (BFS) Traversal

### Level-Order Traversal

Unlike DFS, **Breadth-First Search** (often referred to as **Level-Order** traversal) explores the tree horizontally. It visits all nodes at a given depth (or "level") from left to right before moving down to the next level.

Because tree edges only point downward (parent to child), BFS cannot rely on the call stack. Instead, it utilizes a **Queue (FIFO - First-In, First-Out)** data structure to keep track of child nodes waiting to be processed.

- Enqueue the root node.
- While the queue is not empty:
  1. Dequeue a node and visit it.
  2. Enqueue its left child (if it exists).
  3. Enqueue its right child (if it exists).

This is the algorithm of choice when finding the **shortest path** on an unweighted tree or network.

[Image of breadth first search level-order tree traversal diagram]

---

## Complexity Analysis

The time and space efficiency of traversal algorithms depend on the number of nodes ($n$) and the structural depth of the tree.

| Traversal Approach    | Time Complexity | Space Complexity (Balanced / Skewed) |
| :-------------------- | :-------------- | :----------------------------------- |
| **DFS (Pre/In/Post)** | $O(n)$          | $O(\log n)$ / $O(n)$                 |
| **BFS (Level-Order)** | $O(n)$          | $O(w)$ where $w$ is the max width    |

- **Time Complexity ($O(n)$):** Every algorithm listed visits each node exactly once, meaning operations scale linearly with the total node count.
- **DFS Space Complexity ($O(h)$ where $h$ is height):** In the worst case (a skewed tree), the recursion stack needs to hold $n$ frames, leading to $O(n)$ space. In a perfectly balanced tree, the stack only tracks the height, $O(\log n)$.
- **BFS Space Complexity ($O(w)$ where $w$ is width):** The queue must hold all nodes present on the widest level of the tree. For a perfectly balanced binary tree, the bottom tier contains roughly $n/2$ nodes, requiring $O(n)$ space.

---

## The Core Advantages: When to Use Which

Choosing the right traversal pattern comes down to the problem you are trying to solve:

### 1. Use In-Order DFS for Sorting & Validation

If your underlying structure is a Binary Search Tree and you need to output the data in sorted order—or verify that a tree meets strict BST properties—in-order is the direct solution.

### 2. Use Pre-Order or Post-Order for Hierarchical Math/Parsing

- **Pre-order** preserves structural integrity perfectly (perfect for duplicating trees).
- **Post-order** allows operations that depend on child results (like evaluating mathematical expressions in an Abstract Syntax Tree where operands must be computed before applying operators).

### 3. Use BFS for Shortest Paths or Game AI

When navigating decision trees (like in pathfinding or game AI like chess algorithms), BFS guarantees you find the shallowest path to a solution node without getting trapped down an infinitely deep branch.
