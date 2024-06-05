class Solution {
    findSwapValues(a, n, b, m) {
        let sumA = 0, sumB = 0;
        
        // Calculate the sum of elements in array a and store them in a set
        const setA = new Set();
        for (let i = 0; i < n; i++) {
            sumA += a[i];
            setA.add(a[i]);
        }
        
        // Calculate the sum of elements in array b
        for (let i = 0; i < m; i++) {
            sumB += b[i];
        }
        
        // If the difference between sumA and sumB is odd, return -1
        if ((sumA - sumB) % 2 !== 0) {
            return -1;
        }
        
        // Calculate the target difference
        const target = (sumA - sumB) / 2;
        
        // Check if there is an element in b that can be swapped to balance the sums
        for (let i = 0; i < m; i++) {
            if (setA.has(b[i] + target)) {
                return 1; // Pair found
            }
        }
        
        return -1; // No pair found
    }
}

// Example usage:
const solution = new Solution();
const a = [4, 1, 2, 1, 1, 2];
const b = [3, 6, 3, 3];
const n = a.length;
const m = b.length;
console.log(solution.findSwapValues(a, n, b, m)); // Output: 1 or -1 depending on if such pair exists
