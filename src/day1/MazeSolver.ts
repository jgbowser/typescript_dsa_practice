const directions = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

// this is the function that will actually do the recursing and base case checking
function walk(
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
  seen: boolean[][],
  path: Point[],
): boolean {
  console.log(path)
  // Base cases
  // 1. We're out of bounds
  if (
    curr.x < 0 ||
    curr.x >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze.length
  ) {
    return false;
  }
  // 2. We're in a wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }
  // 3. We've been here before
  if (seen[curr.y][curr.x]) {
    return false;
  }

  // 4. We're at the exit
  if (curr.x === end.x && curr.y === end.y) {
    path.push(curr);
    return true;
  }

  // Recurse case
  // Pre
  seen[curr.y][curr.x] = true;
  path.push(curr);
  // Recurse
  // call walk with each possible direction recursively
  for (let i = 0; i < directions.length; i++) {
    const [dx, dy] = directions[i];
    // we return true if we hit the end, so pass that through
    if (walk(maze, wall, { x: curr.x + dx, y: curr.y + dy }, end, seen, path)) {
      return true;
    }
  }
  // Post
  // we got all the way through the loop and never found the end so we return false and pop off this Point
  path.pop();
  return false;
}

export default function solve(
  maze: string[],
  wall: string,
  start: Point,
  end: Point,
): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = [];

  // fill our seen array with all falses to start
  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }

  walk(maze, wall, start, end, seen, path);

  console.log(path)
  return path;
}
