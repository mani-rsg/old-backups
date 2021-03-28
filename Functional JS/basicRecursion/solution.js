function reduce(arr, fn, initial) {
    // SOLUTION GOES HERE
    if (!arr.length) return initial;

    let wordsCount = fn(initial, arr[0]);

    let nextArr = arr.slice(1);

    return reduce(nextArr, fn, wordsCount);

    // return (function reduceOne(index, value) {
    //     if (index > arr.length - 1) return value // end condition
    //     return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
    //   })(0, initial) // IIFE. kick off recursion with initial values

}

module.exports = reduce