function isPalindrome(str) {
    if (str === null || str === undefined) return false;

    if (str.length <= 1) return true;

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }

        left++; 
        right--;
    }

    return true;

}

console.log(isPalindrome("madam"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("palindrome"));
console.log(isPalindrome("p"));
console.log(isPalindrome([1, 2, 3, 2, 1]));
console.log(isPalindrome(""));






