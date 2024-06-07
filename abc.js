class Solution {
  // l and r are input arrays containing the starting and ending indices of ranges
  // maxx : maximum value in r[]
  // n: size of the array
  // Function to find the maximum occurred integer in all ranges.
  maxOccured(n, l, r, maxx) {
    // Create a difference array initialized with zeros, size is maxx + 2
    let arr = new Array(maxx + 2).fill(0);

    // Mark the start and end+1 of each range
    for (let i = 0; i < n; i++) {
      arr[l[i]]++;
      arr[r[i] + 1]--;
    }

    let occur = 0; // This will store the current prefix sum
    let ansindx = 0; // Index of the maximum occurred integer
    let maxoccur = 0; // Maximum occurrence value

    // Calculate the prefix sums and find the maximum occurred integer
    for (let i = 0; i <= maxx; i++) {
      occur += arr[i];
      if (occur > maxoccur) {
        maxoccur = occur;
        ansindx = i;
      }
    }

    // Return the index of the maximum occurred integer
    return ansindx;
  }
}

// Example usage:
let solution = new Solution();
let l = [1, 2, 3];
let r = [3, 5, 7];
let n = l.length;
let maxx = Math.max(...r);
console.log(solution.maxOccured(n, l, r, maxx)); // Output will be the maximum occurred integer
