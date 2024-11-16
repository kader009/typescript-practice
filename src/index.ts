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

enum strilgList {
  kader = 1,
  molla,
  raser,
  abdul,
}

// console.log(strilgList);

// type inference
const names = ['23', '7', '8', '90'];
// console.log(names);

const tuple: readonly [string, number, boolean] = ['kader', 23, true];

// console.log(tuple);

const age: [number, number] = [29, 30];
const [age1, age2] = age;

// console.log(age1);

const car: {
  type: string;
  model: string;
  year: number;
} = {
  type: 'toyota',
  model: 'f6i noida',
  year: 2000,
};

// console.log(car);

interface Languages {
  [key: string]: string;
}

const language: Languages = {
  en: 'English',
  bn: 'Bengali',
  es: 'Spanish',
};

// console.log(language['en']);

const nameAgeMap: { [index: string]: number } = {};

const gether = (nameAgeMap.kader = 29);
// console.log(gether);

interface Personal {
  name: string;
  age: number;
  [key: string]: string | number | boolean;
}

const AboutMe: Personal = {
  name: 'kader',
  age: 29,
  Occupation: true,
};

// console.log(AboutMe);

// void => use when function never need to return something

function VoidFunc(): void {
  console.log('i am void function');
}

VoidFunc();
