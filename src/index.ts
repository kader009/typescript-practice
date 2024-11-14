// generic

function identify<T>(value: T): T {
  return value;
}

let numberValue = identify<number>(10);
console.log(numberValue);
