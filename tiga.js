function cariArrayKelipatanlima(arr) {
    // Fungsi untuk sorting ascending
    function ascendingSort(a, b) {
        return a - b;
    }

    // Fungsi untuk sorting descending
    function descendingSort(a, b) {
        return b - a;
    }

    let isAscending = true;

    for (let i = 0; i < arr.length; i++) {
        if ((i + 1) % 5 === 0) { // Memeriksa jika indeks adalah kelipatan 5
            if (isAscending) {
                arr = arr.slice(0, i + 1).concat(arr.slice(i + 1).sort(ascendingSort));
            } else {
                arr = arr.slice(0, i + 1).concat(arr.slice(i + 1).sort(descendingSort));
            }
            isAscending = !isAscending; // Mengubah status sorting
        } else if (i === arr.length - 1 && (i + 1) % 5 !== 0) { // Jika sisa elemen kurang dari 5
            if (isAscending) {
                arr = arr.sort(ascendingSort);
            } else {
                arr = arr.sort(descendingSort);
            }
        }
    }

    return arr;
}

// Contoh penggunaan:
let array = [2, 5, 1, 12, -5, 4, -1, 3, -3, 20, 8, 7, -2, 6];
let sortedArray = cariArrayKelipatanlima(array);
console.log(sortedArray);