# Selection Sort

## How It Works (The Mechanics)

Selection Sort is an in-place, comparison-based sorting algorithm. It divides the array into a "sorted" section (on the left) and an "unsorted" section (on the right).

On every pass, the algorithm systematically scans the unsorted section to find the absolute smallest element and swaps it into its correct position at the boundary.

- **The Outer Loop (`i`):** Moves the boundary of the sorted section from left to right across the array.
- **The Inner Loop (`j`):** Acts as a scanner. It begins right after the sorted boundary (`i + 1`) and reviews every single remaining element to locate the true minimum value (`min`).
- **The Conditional Swap (`i !== min`):** Unlike Bubble Sort, which swaps elements continuously, Selection Sort waits until the inner loop scan is completely finished. It performs a maximum of _one single swap_ per outer loop iteration, moving the smallest discovered value directly into its home slot.

---

## 📊 Complexity Analysis

| Scenario                        | Time Complexity | Space Complexity |
| :------------------------------ | :-------------- | :--------------- |
| **Best Case (Already Sorted)**  | $O(n^2)$        | $O(1)$           |
| **Average Case (Random Data)**  | $O(n^2)$        | $O(1)$           |
| **Worst Case (Reverse Sorted)** | $O(n^2)$        | $O(1)$           |

- **Time Complexity ($O(n^2)$):** Because it uses nested loops, the time performance degrades quadratically across all cases. Even if you pass it an array that is completely sorted, it will still execute every single comparison loop to verify that no smaller numbers exist.
- **Space Complexity ($O(1)$):** It operates entirely in-place, modifying the original array values directly without allocating extra helper arrays in memory.

---

## Why Selection Sort is "Bad" (Architectural Critique)

Selection Sort is highly inefficient for production environments and is rarely used in real-world engineering stacks for several distinct reasons:

### 1. Zero Algorithmic Adaptability (Blind Execution)

The primary flaw of Selection Sort is that it has no early-termination mechanisms. While Bubble Sort can use a flag to break out early if data is already sorted, Selection Sort is "blind." It will perform the exact same quadratic number of operations on a perfectly sorted array as it would on a completely scrambled one.

### 2. Disastrous Performance Scaling

With an $O(n^2)$ time bottleneck, execution times spike drastically as datasets expand:

- Sorting **5,000 items** requires roughly **25,000,000 comparisons**.
- Sorting **50,000 items** explodes to roughly **2,500,000,000 comparisons**.
  This makes it entirely unviable for processing large collections of records, enterprise databases, or real-time data streams.

---

## ⚖️ Selection Sort vs. Bubble Sort: The Only Advantage

While both algorithms share a poor $O(n^2)$ time profile, Selection Sort holds a major technical advantage over Bubble Sort regarding **Memory Writes**.

- **Bubble Sort** continuously triggers writes to memory, swapping adjacent items multiple times during a single pass.
- **Selection Sort** only modifies memory positions _at most once_ per outer loop pass.

On specialized hardware architectures (such as older EEPROM flash memory or microcontrollers) where writing data to memory is significantly more expensive or wears out the physical hardware faster than reading data, **Selection Sort is highly preferred over Bubble Sort** because it minimizes write cycles.
