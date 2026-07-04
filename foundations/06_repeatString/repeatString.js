const repeatString = function(string, num) {
    if (num < 0) {
<<<<<<< HEAD
        alert('ERROR');
    }
    let word = "";
    for (let i = 0; i < num; i++) {
        word += string;       
    }

=======
        return('ERROR');
    }

    let word = "";
    for (let i = 0; i <= num; i++) {
        word += string;
    }

>>>>>>> f54db93fdc4345b4b19a83d9e0eb7603af6bc72b
    return word;
};

// Do not edit below this line
module.exports = repeatString;
