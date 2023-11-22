function findThreeNumbersArr(arr) {
    const n = arr.length;
    arr.sort((a, b) => a - b); 

    for (let i = 0; i < n - 2; i++) {
        let left = i + 1;
        let right = n - 1;
        
        while (left < right) {
            const sum = arr[i] + arr[left] + arr[right];
            
            if (sum === 0) {
                return [arr[i], arr[left], arr[right]]; 
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return "Not Found"; 
}


const array_number = [2, 1, 5, 7, 4, -8, -3, -1];
const result = findThreeNumbersArr(array_number);

console.log(result);
