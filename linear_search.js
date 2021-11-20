const numbers = [10, 3, 45, 3234, 56, 6, 5, 43, 23, 8, 54, 32];
function linear_search(array, target) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element == target) {
      return i;
    }
  }
  return -1;
}
const index = linear_search(numbers, 12);
console.log(index);
