// Linear Search is a simple "step through each element of the array looking for the value" algorithm
// because in the worst case we step through every item of the array that means that this algorithm
// is O(n) - linear - time complexity

export default function linear_search(
  haystack: number[],
  needle: number,
): boolean {
  // check every value from the beginning to end, returning once it is found
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return true;
    }
  }
  // never found our value
  return false;
}
