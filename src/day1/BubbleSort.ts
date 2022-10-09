// Sorting algorithm in which each iteration through the array results in the largest
// number moving to the end. This means each time we iterate through, we can stop 1
// index sooner, because we know things at the end are sorted.
// results in a time complexity of O(N^2)

export default function bubble_sort(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
      }
    }
  }
}