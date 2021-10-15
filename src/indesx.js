// N1
const add = function (a) {
  const first = a;
  return function (b) {
    const second = b;
    return a + b;
  };
};
add(2)(3);
add(1)(2);

// N2
const multipliedSum = function (...a) {
  let first = 0;
  a.map((x) => (first = x + first));

  return function (b) {
    console.log(first * b);
  };
};

multipliedSum(1, 2, 3, 4)(2); // => 20
multipliedSum(1, 2)(3); // => 9
multipliedSum(0)(20); // => 0

// N3
const addSuffix = function (adding) {
  return function addLy(lyy) {
    console.log(`${lyy}${adding} `);
  };
};

const addLy = addSuffix("ly");

addLy("hopeless"); // hopelessly
addLy("total"); // totally

const addLess = addSuffix("less");

addLess("fear"); // fearless
addLess("ruth"); // ruthless

// N4

const first = {
  a: 1,
  b: 2,
  c: 3,
};

const second = {
  d: 4,
  e: 5,
  f: 6,
};

const third = {
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
};

/*
  // result should be this
  {
    bb: 4,
    dd: 8,
    ff: 12,
    hh: 16,
    jj: 20
  }
  
  */

const obj1 = { ...first, ...second, ...third };
console.log(obj1);

function doTheMagic(obj) {
  const obb = Object.entries(obj);

  const odd = {};
  // for (let i of obb) {
  //   if (i[1] % 2 === 0) {
  //     x[`${i[0]}${i[0]}`] = i[1] * 2;
  //   }
  // }
  for (let [key, value] of obb) {
    if (value % 2 == 0) {
      odd[`${key}${key}`] = value * 2;
    }
  }

  console.log(odd);
}

doTheMagic(obj1);

// console.log(Object.values(obj))

// N5

let a = 3;
let b = 4;

let temp = a;
a = b;
b = temp;

[a, b] = [b, a];
// This is variable value swapping. "a" becomes "b" and "b" becomes "a"

// Do the same thing with ES6 array destructuring
