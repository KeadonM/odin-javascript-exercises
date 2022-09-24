const removeFromArray = function (arr, ...args) {
    for (const value of args) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === value) {
                arr.splice(i, 1);
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
