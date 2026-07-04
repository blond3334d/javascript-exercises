const fibonacci = function(position) {
    let count

    // check if the input is a number. if not, convert it to a number using parseInt().
    if (typeof position != 'number') {
        count = parseInt(position);
    } else {
        count = position;
    }

    // if the input is negative, return OOPS
    if (count < 0) return "OOPS";

    // initialize an array that contains the first two elements.
    const fib = [0, 1];

    // loop through it until the desired position is reached. start from position 2 because the array already has two elements.
    for (let i = 2; i <= count; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; 
        // the value of the current position is the sum of the value of the position [current value - 1], and the value of the position [current value - 2].
        // in this case, since we're on the 3rd position:
        // fib[i - 1] = fib[2] = 1 -> second element
        // fib[i - 2] = fib[1] = 0 -> first element
    }
    return fib[count];

};

// Do not edit below this line
module.exports = fibonacci;
