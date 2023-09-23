const removeFromArray = function(array, ...args) {
    // Menggunakan filter() untuk membuat array baru yang hanya berisi elemen yang tidak ada dalam args
    const newArray = array.filter(item => !args.includes(item));
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;