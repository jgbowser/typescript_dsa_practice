// This problem presents an interesting way to avoid a linear time complexity when a binary
// search won't quite work. If we jump to halfway and the crystal ball breaks we're forced
// to then step through the first half of options linearly. 
// Instead we can step through a sqrt at a time and only ever have to walk a sqrt at a time when the first ball breaks.
// This isn't a constant so it doesn't get dropped from the big O notation so we end up with O(sqrt(N))

export default function two_crystal_balls(breaks: boolean[]): number {
  const jmpAmount = Math.floor(Math.sqrt(breaks.length));
  let i = jmpAmount;

  for (; i < breaks.length; i += jmpAmount) {
    if (breaks[i]) {
      break;
    }
  }

  // our first ball broke, now we go back to the previous jump and walk forward until we find out first true
  i -= jmpAmount;

  for (let j = 0; j < jmpAmount && i < breaks.length; j++, i++) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
}