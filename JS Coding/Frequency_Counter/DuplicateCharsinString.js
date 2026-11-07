function duplicateCharacters(str) {
    const charCounts = {};
    const dupeChars = [];

    for (const char of str) {
        if (charCounts[char]) {
            charCounts[char] += 1;
        } else {
            charCounts[char] = 1;
        }

        // charCounts[char] = (charCounts[char] || 0) + 1;
    }

    for (const char in charCounts) {
        if (charCounts[char] > 1) {
            dupeChars.push(char);
        }
    }

    return dupeChars;
}

console.log(duplicateCharacters("programming"));