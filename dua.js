function removeDuplicates(arr) {
    const uniqueArray = new Map();
    const result = [];

    arr.forEach(item => {
        if (!uniqueArray.has(item)) {
            result.push(item);
            uniqueArray.set(item, true);
        }
    });

    return result;
}

// Contoh penggunaan
const array_number = [1, 1, 4, 4, 4, 5, 5, 6, 8, 9, 10, 10, 12, 13, 13, 17];
const result = removeDuplicates(array_number);

console.log(result);