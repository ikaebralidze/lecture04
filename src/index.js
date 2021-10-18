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

////////////////////////////////////

// Lecture 04 additional Exercises
//////////////////////////////////
console.log("------------N1---------");
// N1
const minMax = function (arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const end = [min, max];
  console.log(end);
};
minMax([1, 2, 3, 4, 5]); //[1, 5]

minMax([2334454, 5]); // [5, 2334454]

minMax([1]); // [1, 1]
console.log("------------N2---------");
// N2
const tuckIn = function (firstArr, secondArr) {
  const [firstHalf, secondHalf] = firstArr;
  const result = [firstHalf, ...secondArr, secondHalf];
  console.log(result);
};

tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

tuckIn([15, 150], [45, 75, 35]); // [15, 45, 75, 35, 150]

tuckIn(
  [
    [1, 2],
    [5, 6],
  ],
  [[3, 4]]
); // [[1, 2], [3, 4], [5, 6]]

// note: The first array always has two elements.
console.log("------------N3---------");
// N3
const numObj = function (num) {
  const obj = {};
  for (const numer of num) {
    const str = String.fromCharCode(numer);
    obj[numer] = str;
  }
  console.log(obj);
};

numObj([118, 117, 120]); // [{'118':'v'}, {'117':'u'}, {'120':'x'}]

numObj([101, 121, 110, 113, 103]); // [{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'103':'g'}]

numObj([118, 103, 110]); // [{"118":"v"}, {"103":"g"}, {"110":"n"}
console.log("------------N4---------");
// N4

const func = function (arr) {
  console.log(new Set(arr));
};

func([1, 3, 3, 5, 5]); // [1, 3, 5]

func([4, 4, 4, 4]); // [4]

func([5, 7, 8, 9, 10, 15]); // [5, 7, 8, 9, 10, 15]

func([3, 3, 3, 2, 1]); // [1, 2, 3]
console.log("------------N5---------");
// N5

const formatPhoneNumber = function (arr) {
  console.log(
    `(${arr.slice(0, 3).join("")}) ${arr.slice(3, 6).join("")}-${arr
      .slice(6, 10)
      .join("")}`
  );
};

formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // "(123) 456-7890"

formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]); // "(519) 555-4468"

formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]); // "(345) 501-2527"

console.log("------------N6---------");
// N6

const toArray = function (num) {
  const narr = String(num);
  const arr = [];
  for (let i = 0; i < narr.length; i++) {
    arr.push(Number(narr[i]));
  }
  console.log(arr);
};

const toNumber = function (arr) {
  const num = arr.join("");
  console.log(Number(num));
};
toArray(235); // [2, 3, 5]

toArray(0); // [0]

toNumber([2, 3, 5]); // 235

toNumber([0]); // 0

console.log("------------N7---------");
// N7

const sliceSum = function (arr, n) {
  const sliced = arr.slice(0, n);
  let total = 0;
  for (let i = 0; i < sliced.length; i++) {
    total += sliced[i];
  }
  console.log(total);
};

sliceSum([1, 3, 2], 2); // 4

sliceSum([4, 2, 5, 7], 4); // 18

sliceSum([3, 6, 2], 0); // 0

console.log("------------N8---------");
// N8

const countOnes = function (arr) {
  let total = 0;
  for (let i of arr) {
    for (let g of i) {
      if (g === 1) {
        total += g;
      }
    }
  }
  console.log(total);
};
countOnes([
  [1, 0],
  [0, 0],
]); // 1

countOnes([
  [1, 1, 1],
  [0, 0, 1],
  [1, 1, 1],
]); //7

countOnes([
  [1, 2, 3],
  [0, 2, 1],
  [5, 7, 33],
]); // 2

// Implenetations

// Filter
const anyArr = [2, 1, 3, 4, 5, 6];

const myFilter = function (arr, func) {
  let filtredArr = [];

  for (let i of arr) {
    if (func(i)) {
      filtredArr.push(i);
    }
  }
  console.log(filtredArr);
};

myFilter(anyArr, (x) => x === 5);

// every

const myEvery = function (arr, func) {
  let asd = 0;
  for (let i of arr) {
    if (!func(i)) {
      break;
    } else {
      asd++;
    }
  }
  console.log(asd === arr.length);
};

myEvery(anyArr, (x) => x <= 6);

// Reduce

const myReduce = function (arr, func, sAcc = 0) {
  let acc = sAcc;
  for (let i of arr) {
    acc = func(acc, i);
  }
  console.log(acc);
};

myReduce(anyArr, (acc, curr) => acc + curr, 15);
