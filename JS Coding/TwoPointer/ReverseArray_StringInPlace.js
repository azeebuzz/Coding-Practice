function reverseArrayInPlace(arr) {
    // [STRING ADAPTATION] If input is a string (e.g., str):
    // const arr = str.split(""); // Step 1: Turn string into mutable array of characters

    if (!arr) return null;
    if (arr.length <= 1) return arr;

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];

        // Classic 3-step swap alternative:
        // const temp = arr[left];
        // arr[left] = arr[right];
        // arr[right] = temp;

        left++;
        right--;
    }

    // [STRING ADAPTATION] For string output:
    // return arr.join(""); // Step 2: Combine characters back into a string

    return arr;
}

console.log(reverseArrayInPlace([1, 2, 3, 4]));
console.log(reverseArrayInPlace(["h,", "e", "l", "l", "o"]));
console.log(reverseArrayInPlace([24]));
console.log(reverseArrayInPlace());