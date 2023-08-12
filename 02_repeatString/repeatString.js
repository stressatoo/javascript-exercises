const repeatString = function(str, n_ofTimes) {
    let data = new Array(n_ofTimes);
    for (let index = 0; index < data.length; index++) {
        data[index] = str;        
    }

    console.log(data.join(""));
};

let string = "hey";
let numberOfTimes = 3;

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
