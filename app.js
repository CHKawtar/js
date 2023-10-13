function hasSeven(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toString().includes(7)) {
      return "Boom!";
    }
  }
  return "There is no 7 in the array";
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 78, 9];
console.log(hasSeven(numbers));

const numbersWithoutSeven = [1, 2, 3, 4, 5, 6, 8, 9];
console.log(hasSeven(numbersWithoutSeven));
