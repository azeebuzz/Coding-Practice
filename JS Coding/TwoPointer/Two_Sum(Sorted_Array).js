function twoSumArray(arr, target) {
    if (!arr || arr.length < 2) return null;

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];

        if (sum < target) {
            left++;
        } else if (sum > target) {
            right--;
        } else {
            return [left, right];
        }

    }

    return null;


}

console.log(twoSumArray([2, 3, 5, 8, 11, 15], 13));
console.log(twoSumArray([1, 2, 5, 6], 13));



function allUniquePairsTwoSum(arr, target) {
    if (!arr || arr.length < 2) return [];

    let left = 0;
    let right = arr.length - 1;
    const result = [];

    while (left < right) {
        const currentSum = arr[left] + arr[right];

        if (currentSum === target) {
            result.push([arr[left], arr[right]]);

            // Save the values we just used
            const leftVal = arr[left];
            const rightVal = arr[right];

            // 1. Skip all consecutive duplicate values on the left
            while (left < right && arr[left] === leftVal) {
                left++;
            }

            // 2. Skip all consecutive duplicate values on the right
            while (left < right && arr[right] === rightVal) {
                right--;
            }

        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }

    return result;
}

// Verification:
console.log(allUniquePairsTwoSum([1, 1, 2, 3, 4, 4, 5], 5));
// Output: [ [1, 4], [2, 3] ] -> Clean! No duplicate [1, 4]