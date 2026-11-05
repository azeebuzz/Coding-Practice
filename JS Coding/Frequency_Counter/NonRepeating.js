function firstNonRepeatingCharacter(str) {
    const charCounts = {};

    for (const char of str) {
        if (charCounts[char]) {
            charCounts[char] += 1;
        } else {
            charCounts[char] = 1;
        }
        // charCounts[char] = (charCounts[char] || 0) + 1;
    }

    for (const char of str) {
        if (charCounts[char] === 1) {
            return char;
        }
    }

    return null;
}

const result = firstNonRepeatingCharacter("aabbcc");
console.log(result ? `"${result}" is the first non-repeating character` : "No non-repeating characters found");