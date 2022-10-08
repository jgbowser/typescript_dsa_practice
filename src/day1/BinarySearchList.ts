// Binary search works on an ordered input. Because we know it is ordered we can jump straight
// to the half way point and determine if we found our value, need to check the lower values,
// or need to check the higher values; always going to the middle of each direction we go.
// This results in an O(logN) time complexity

export default function bs_list(haystack: number[], needle: number): boolean {
  // start by defining our hi and low
  let low = 0;
  let hi = haystack.length;
  
  // loop until hi and low are equal, meaning we've divided in half as much as we possibly could without finding the answer
  while (low < hi) {
    // compute our mid and value at the start of each iteration
    let mid = Math.floor(low + (hi - low) / 2);
    let value = haystack[mid];

    if (value === needle) {
      return true;
    } else if (value > needle) {
      hi = mid;
    } else {
      low = mid + 1;
    }
  }
  // never found out value
  return false;
}
