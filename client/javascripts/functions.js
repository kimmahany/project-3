// jshint esversion: 6

//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);

// req #1 good
let bitBatBotOrNot = n => {
  let result = "";
  if (n % 3 == 0) {
    result = `${result}Bit`;
  }
  if (n % 5 == 0) {
    result = `${result}Bat`;
  }
  if (n % 7 == 0) {
    result = `${result}Bot`;
  }
  if (n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0) {
    result = `${result}Not`;
  }
  return result;
};

// req #2 good
let bitBatBotOrNot1 = n => {
  let result = "";
  if (n % 3 == 0) {
    result = `${result}Bit`;
  }
  if (n % 5 == 0) {
    result = `${result}Bat`;
  }
  if (n % 7 == 0) {
    result = `${result}Bot`;
  }
  if (n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0) {
    result = `${result}Not`;
  }
  return result;
};
let findAllbitBatBotOrNots1 = arr => {
  let returnArr = arr.map(bitBatBotOrNot1); //pass a function to the map
  let returnArr1 = arr.map(function(x, i) {
    //pass a function to the map again to link  the 2
    return `${x}: ${arr1[i]}`;
  });
  return returnArr1;
};

// req #3 good
let bitBatBotOrNot2 = n => {
  let result = "";
  if (n % 3 == 0) {
    result = `${result}Bit`;
  }
  if (n % 5 == 0) {
    result = `${result}Bat`;
  }
  if (n % 7 == 0) {
    result = `${result}Bot`;
  }
  if (n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0) {
    result = `${result}Not`;
  }
  return result;
};
let findAllbitBatBotOrNots2 = arr => {
  let returnArr = [];
  for (var i = 0; i < arr.length; i++) {
    returnArr.push(arr[i] + " : " + bitBatBotOrNot2(arr[i]));
  }
  return returnArr;
};

// req #4 good
let bitBatBotOrNot3 = n => {
  let result = "";
  if (n % 3 == 0) {
    result = `${result}Bit`;
  }
  if (n % 5 == 0) {
    result = `${result}Bat`;
  }
  if (n % 7 == 0) {
    result = `${result}Bot`;
  }
  if (n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0) {
    result = `${result}Not`;
  }
  return result;
};
let findAllbitBatBotOrNots3 = arr => {
  let returnArr = [];
  for (let elem of arr) {
    returnArr.push(elem + " : " + bitBatBotOrNot3(elem));
  }
  return returnArr;
};

// req #5 fix
let bitBatBotOrNot4 = n => {
  let result = "";
  if (n % 3 == 0) {
    result = `${result}Bit`;
  }
  if (n % 5 == 0) {
    result = `${result}Bat`;
  }
  if (n % 7 == 0) {
    result = `${result}Bot`;
  }
  if (n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0) {
    result = `${result}Not`;
  }
  return result;
};
let findAllbitBatBotOrNots4 = arr => {
  let returnArr = [];
  arr.forEach(arr => ":" + returnArr.push(bitBatBotOrNot4(arr)));
  return returnArr;
};

//test the functions

findAllbitBatBotOrNots1([9, 10, 20, 25, 35]);

findAllbitBatBotOrNots2(arrOf1To100);

findAllbitBatBotOrNots3(arrOf1To100);

findAllbitBatBotOrNots4(arrOf1To100);
