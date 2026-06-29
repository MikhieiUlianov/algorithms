# Merge Sort

## How It Works (The Mechanics)

Merge Sort is an "online-capable", stable, comparison-based sorting algorithm that operates on the **Divide and Conquer** paradigm.

It works by aggressively dividing arrays down into individual elements, and then rebuilding ("zipping") them back together in perfect order.

- **The Divide Phase (`mergeSort`):** Recursively splits the array dead down the middle (`Math.floor(array.length / 2)`) into a `left` half and a `right` half. This division continues until it hits the **Base Case** (an array of length 0 or 1), which is sorted by definition.
- **The Conquer Phase (`merge`):** Takes two arrays that are _already internally sorted_, compares their leading pointer values (`leftIdx` and `rightIdx`), and pushes the smaller value into a results tracker (`resArr`).
- **The Clean Up (`concat`):** Once one array runs out of items, the remaining elements of the opposite array are appended directly to the end. Since both input arrays were already sorted, any remaining items are guaranteed to be the largest, requiring no additional re-sorting steps.

---

## 📊 Complexity Analysis

| Scenario         | Time Complexity | Space Complexity |
| :--------------- | :-------------- | :--------------- |
| **Best Case**    | $O(n \log n)$   | $O(n)$           |
| **Average Case** | $O(n \log n)$   | $O(n)$           |
| **Worst Case**   | $O(n \log n)$   | $O(n)$           |

- **Time Complexity ($O(n \log n)$):** Split phases take logarithmic time ($\log n$), and merging them back together requires scanning across $n$ elements. This means Merge Sort is incredibly fast and performant on massive datasets.
- **Space Complexity ($O(n)$):** Unlike Bubble or Selection Sort, Merge Sort is **not** in-place. It physically splits slices into memory and dynamically constructs new array structures during execution. Its memory footprint scales linearly with the input size.

---

## ⚠️ Architectural Tradeoffs: Why Choose Merge Sort?

### The Bad: Memory Overhead

Because Merge Sort constructs completely new temporary array fragments during every split step, it has an auxiliary space complexity of $O(n)$. If you are working on resource-constrained systems (like embedded systems, microcontrollers, or massive data sets pushing the bounds of system RAM), Merge Sort can cause memory exhaustion or trash your CPU cache lines.

### The Good: Absolute Stability

Unlike Quick Sort, whose worst-case performance drops to a terrible $O(n^2)$ if it keeps picking bad pivots, Merge Sort is **100% predictable**. It splits arrays blindly down the middle regardless of how messy the values are. It will sort a perfectly arranged list and a completely randomized list in the exact same optimal time.
