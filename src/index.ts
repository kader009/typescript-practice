// generic

function identify<T>(value: T): T {
  return value;
}

let numberValue = identify<number>(10);
// console.log(numberValue);

function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}

// console.log(createPair<string, number>('kader', 29));
