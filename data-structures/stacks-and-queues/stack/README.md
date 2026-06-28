# Stack

## How It Works (The Mechanics)

A **Stack** is a linear data structure that operates strictly on the **LIFO (Last In, First Out)** principle. It mimics real-world scenarios like a physical stack of dinner plates or a tray dispenser in a cafeteria: the last item placed onto the stack is inevitably the first one to be removed.

- **The Single Anchor Pointer:** Unlike lists that maintain references to both ends, a stack container tracks only one critical property:
  - `top`: A pointer referencing the most recently added node or element (the current apex of the stack).
  - `length` / `size`: A running counter tracking the total number of items currently in the stack.
- **Top-Only Access:** Because all actions are restricted to the `top` pointer, random access or indexing into the middle of the structure is impossible. To inspect or remove an item buried deep inside, every element above it must first be removed sequentially.

### Core Operations:

- `push(val)`: Places a new element directly onto the top of the stack and updates the `top` pointer to this new element.
- `pop()`: Removes the element currently at the `top` of the stack, shifts the `top` pointer to the immediate underlying element, and returns the removed value.
- `peek()`: Inspects and returns the value at the `top` pointer without mutating the stack structure.

---

## Complexity Analysis

| Operation         | Time Complexity (Array-based) | Time Complexity (Linked List-based) | Space Complexity |
| :---------------- | :---------------------------- | :---------------------------------- | :--------------- |
| **Push (`push`)** | $O(1)$ _(Amortized)_          | $O(1)$                              | $O(1)$           |
| **Pop (`pop`)**   | $O(1)$                        | $O(1)$                              | $O(1)$           |
| **Peek (`peek`)** | $O(1)$                        | $O(1)$                              | $O(1)$           |

- **Time Complexity Highlights:** Every core stack operation runs in absolute **$O(1)$ constant time**. There are no loops or traversals because mutations happen exclusively at the pre-tracked `top` reference. In array implementations, `push` is _amortized_ $O(1)$ because it may occasionally trigger a memory reallocation when capacity is reached.
- **Space Complexity ($O(1)$):** Operations are performed strictly in-place. The execution of a push or pop requires a static, minimal overhead of temporary pointer reassignments, regardless of how massive the stack becomes.

---

## Architectural Critique: The Trade-Offs

While Stacks offer unparalleled speed for boundary-restricted mutations, they impose significant structural constraints:

- **Complete Lack of Searchability:** Searching for a value or accessing an arbitrary index requires destructive traversal ($O(n)$). You must clear out the top elements to see what is underneath, destroying the data state unless you clone it into an auxiliary structure.
- **Array Reallocation Spikes:** When implemented using dynamic arrays (like a standard vector), hitting capacity limits forces the underlying engine to allocate a completely new, larger contiguous block of memory and copy all elements over, introducing sudden $O(n)$ latency spikes.
- **Linked List Pointer Overhead:** When implemented using a singly linked list to avoid resizing issues, every data payload must store an accompanying memory pointer (`next`). This introduces administrative memory inflation and potential CPU cache misses due to heap fragmentation.

---

## The Core Advantages: Where Stacks Shine

The highly restricted nature of a Stack is precisely what makes it an elite tool for tracking nested states and reversing operations:

### 1. Tracking Nested Execution & Contexts

Because a stack natively tracks "what happened last," it is the absolute foundation for keeping state in nested environments. When a process opens a sub-process, the parent state is pushed down, and the sub-process runs on top.

### 2. Backtracking and State Reversal

Since items are retrieved in the exact reverse order of how they arrived, stacks provide a direct, low-overhead mechanism for reversing data paths.

> **Real-World Fact:** Stacks power the underlying **Call Stack** of modern runtime engines (such as V8 in JavaScript or the JVM in Java), managing active function invocations, execution scopes, and local variable tracking. They also directly drive the **Undo/Redo** buffers in text editors, the history-parsing mechanics of **Browser Navigation Filters** (Back/Forward buttons), and parenthesis/syntax matching in compilers.
