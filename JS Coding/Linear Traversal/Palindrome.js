function isPalindrome(wordCheck) {
    // 1. Normalize casing so uppercase and lowercase letters match
    wordCheck = wordCheck.toLowerCase();

    // 2. Empty container to accumulate characters in reverse
    let reversed = "";

    // 3. Step backward from the last index down to 0
    for (let i = wordCheck.length - 1; i >= 0; i--) {
        reversed += wordCheck[i];
    }

    // 4. Return true if they match, false if they don't
    return reversed === wordCheck;
}

// Array of words to test
const testWords = ["Radar", "Hello", "Madam", "Playwright"];

// Loop through each word in the array and log the descriptive message
for (const word of testWords) {
    if (isPalindrome(word)) {
        console.log(`"${word}" is a Palindrome`);
    } else {
        console.log(`"${word}" is NOT a Palindrome`);
    }
}