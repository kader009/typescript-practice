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


enum strilgList{
  kader = 1,
  molla,
  raser,
  abdul
}

// console.log(strilgList);


const names: number[]  = [23, 7, 8, 90]
console.log(names);

