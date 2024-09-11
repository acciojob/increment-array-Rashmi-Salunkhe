let arr = [1, 2, 3, 4, 5];

function incrementArray(arr) {
  // Create a new array by mapping over the input array and incrementing each element
  return arr.map(num => ++num); // using the increment operator
}

alert(incrementArray(arr)); // Output: [2, 3, 4, 5, 6]
