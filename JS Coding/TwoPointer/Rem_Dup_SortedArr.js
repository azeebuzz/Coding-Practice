function removeDuplicatesArray(arr) {
    if (!arr || arr.length === 0) return 0; // Return 0 to match the number count below

    let slow = 0;

    for (let fast = 1; fast < arr.length; fast++) {
        if (arr[fast] !== arr[slow]) {
            slow++;
            arr[slow] = arr[fast];
        }
    }

    return slow + 1;
}

// Verification:
const nums = [1, 1, 2, 2, 3];
const k = removeDuplicatesArray(nums);

console.log("Unique count:", k); // 3

// If you want to see the clean array in your terminal:
nums.length = k;
console.log("Clean array:", nums); // [1, 2, 3]