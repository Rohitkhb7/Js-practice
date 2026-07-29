function isAnagram(str1, str2) {
    // Clean strings: remove non-alphanumeric characters and convert to lowercase
    const cleanStr1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();

    // If lengths differ after cleaning, they cannot be anagrams
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    // Sort the characters and compare the resulting strings
    const sorted1 = cleanStr1.split('').sort().join('');
    const sorted2 = cleanStr2.split('').sort().join('');

    return sorted1 === sorted2;
}
console.log(isAnagram("Listen", "Silent"));