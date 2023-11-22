function palingdrom(word) {
    const len = word.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (word[i] !== word[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

const word1 = "madam";
const word2 = "gozaru";

console.log(palingdrom(word1)); 
console.log(palingdrom(word2)); 