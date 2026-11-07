function isAnagram(str1, str2) {

    // 1. Normalization: strip spaces/punctuation and convert to lowercase FIRST
    // const cleanStr1 = str1.toLowerCase().replace(/[^a-z0-9]/g, "");
    // const cleanStr2 = str2.toLowerCase().replace(/[^a-z0-9]/g, "");

    if (str1.length !== str2.length) {
        return false;
    }

    const charCounts = {};

    for (const char of str1) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }

    for (const char of str2) {
        if (!charCounts[char]) {
            return false;
        }
        charCounts[char] -= 1;
    }

    return true;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("cat", "bat"));
console.log(isAnagram("cars", "car"));
console.log(isAnagram("rac", "cra"));