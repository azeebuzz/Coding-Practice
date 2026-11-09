function maxFrequency(str) {
    // Edge Case Alternative:
    // if (!str) return null; // Catches empty string "", null, or undefined

    const charCounts = {};

    for (const char of str) {
        charCounts[char] = (charCounts[char] || 0) + 1;
        // Alternative tally syntax:
        // charCounts[char] = (charCounts[char] ?? 0) + 1; // Nullish coalescing (ES2020)
    }

    let maxChar = "";
    let maxCount = 0;

    // Alternative for Minimum/Least Frequent:
    // let minChar = "";
    // let minCount = Infinity; // Start at Infinity so any real count is smaller (< minCount)

    for (const char in charCounts) {
        if (charCounts[char] > maxCount) {
            maxCount = charCounts[char];
            maxChar = char;
            // Alternative for Numbers array:
            // maxChar = Number(char); // Casts string key back to number
        }
    }

    // Return Alternatives depending on prompt requirements:
    // return maxChar;                          // Primitive value only (e.g. "a")
    // return { [maxChar]: maxCount };           // Dynamic key format: { a: 2 }
    return { maxChar, maxCount };
}

console.log(maxFrequency("javascript"));