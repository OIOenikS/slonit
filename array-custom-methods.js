
//mySlice

let arr = ["t", "e", "s", "t"];

function definePosition (position, arrLength) {
  const newPosition = position >= 0? position : (arrLength + position);
  if (newPosition < 0) return 0;
  return newPosition;
}

function mySlice(arr, start = 0, end = arr.length) {
  const newArr = [];
    for (let i = definePosition(start,arr.length); i < definePosition(end,arr.length); i++) {
      newArr.push(arr[i]);
    }
    return newArr;
}

console.log(mySlice(arr, 1, 3));
console.log(mySlice(arr, -2));

//myIndexOf

let arr1 = [1, 0, false, NaN];
let fruits = ['Яблоко', 'Апельсин', 'Яблоко']

function myIndexOf(arr, item, from = 0) {
  for (let i = definePosition(from, arr.length); i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
}

console.log(myIndexOf(arr1, 0));
console.log(myIndexOf(arr1, false));
console.log(myIndexOf(arr1, null));
console.log(myIndexOf(arr1,  NaN));
console.log(myIndexOf(fruits, 'Яблоко'));

//myIncludes

function myIncludes(arr, item, from = 0) {
  for (let i = definePosition(from, arr.length); i < arr.length; i++) {
    if ((arr[i] === item) || (Number.isNaN(item)) && (Number.isNaN(arr[i]) === Number.isNaN(item))) {
      return true;
    }
  }
  return false;
}

console.log(myIncludes(arr1, 0));
console.log(myIncludes(arr1, false));
console.log(myIncludes(arr1, null));
console.log(myIncludes(arr1,  NaN));