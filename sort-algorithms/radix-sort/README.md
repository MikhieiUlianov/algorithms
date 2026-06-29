# Radix Sort

## How It Works (The Mechanics)

Radix Sort is a non-comparison-based sorting algorithm that fundamentally redefines how data is sorted. Instead of comparing pairs of elements directly (like Quick Sort or Merge Sort), it processes integers by grouping them by their individual digits, column by column, from right to left.

- **The Digit Alignment:** The algorithm identifies the maximum number of digits in the dataset (the maximum length) to determine how many passes are required.
- **The Bucketing Phase (Least Significant Digit First):** It starts with the ones column ($10^0$). It distributes all numbers into 10 separate buckets (labeled 0 through 9) corresponding to the digit value at that column position.
- **The Re-collection:** The numbers are pulled out of the buckets in strict order (maintaining their relative sequence) and flattened back into a single array.
- **The Column Shift:** The process repeats recursively for the tens column ($10^1$), the hundreds column ($10^2$), and so on, until the most significant digit position is completed.

---

## Complexity Analysis

| Scenario                         | Time Complexity | Space Complexity |
| :------------------------------- | :-------------- | :--------------- |
| **Best Case (Uniform Data)**     | $O(nk)$         | $O(n + q)$       |
| **Average Case (Random Data)**   | $O(nk)$         | $O(n + q)$       |
| **Worst Case (Large Key Range)** | $O(nk)$         | $O(n + q)$       |

- **Time Complexity ($O(nk)$):** Where $n$ is the number of elements and $k$ is the number of digits (or word size) of the largest number. Because $k$ passes are required, and each pass looks at all $n$ numbers exactly once, execution time scales linearly.
- **Space Complexity ($O(n + q)$):** Radix Sort requires external buckets to temporarily buffer the data during each pass. Here, $q$ represents the base/radix of the numbering system (typically 10 buckets for decimal numbers), and $n$ is the memory allocation needed to preserve elements during re-collection.

---

## Why Radix Sort Can Be "Bad" (Architectural Critique)

Despite its unique mathematical bypass of standard sorting speed limits, Radix Sort features distinct drawbacks that limit its general-purpose utility:

- **The Key-Length Bottleneck ($k$):** If you try to sort an array containing a few elements but one massive number (e.g., sorting `[2, 5, 9999999999]`), $k$ becomes massive. The algorithm forces you to execute billions of processing cycles over small data lengths, making it far slower than standard $O(n \log n)$ algorithms.
- **Heavy Memory Footprint:** Unlike Quick Sort's highly efficient in-place memory swaps, Radix Sort cannot execute inside its original array boundary. It requires substantial dynamic allocation to maintain separate queue data structures for each digit bucket.
- **Type Restrictions:** Radix Sort is fundamentally constrained by data formats. While comparison algorithms can process anything with an implicit order (strings, complex object properties, floating-point records), Radix Sort must be custom-engineered or mathematically mapped to work on non-integer datasets.

---

## 🏆 The Core Advantages: Where Radix Sort Shines

When deployed in its optimal operational environment, Radix Sort delivers capabilities that outclass standard comparison engines:

### 1. Beating the $O(n \log n)$ Theoretical Limit

Computer science proofs dictate that no comparison-based algorithm can ever run faster than $O(n \log n)$ time complexity. Radix Sort completely ignores this law because it never compares numbers. When the maximum number of digits ($k$) is significantly smaller than the total count of elements ($n$), Radix Sort achieves near-perfect $O(n)$ linear speed.

### 2. Native Stability

Radix Sort relies on a **stable** underlying sorting engine (traditionally Counting Sort) to process each individual column digit. Because it leaves elements with identical target digits in their exact original relative order during the collection phase, it is incredibly reliable for composite record sorting.

> 💡 **Real-World Fact:** Radix Sort is heavily utilized in high-performance networking architectures and hardware routing tables. Because IP addresses (IPv4) are explicitly comprised of fixed-size 32-bit integers, the digit length ($k$) is a hard, predictable constant. This makes Radix Sort the fastest possible choice for routing gigabits of web traffic data packets across network switches in real time!
