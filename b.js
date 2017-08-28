const arrNums = [1, 2, 3, 5];

function sqrNums(inputArrNum) {
    const output = [];
    for(let i = 0; i < inputArrNum.length; i++) {
        output.push(inputArrNum[i] * inputArrNum[i]);
    }
    return output;
}

// function sqrNums(inputArrNum) {
//     for(let i = 0; i < inputArrNum.length; i++) {
//         inputArrNum[i] = inputArrNum[i] * inputArrNum[i];
//     }
//     return inputArrNum;
// }
console.log(sqrNums(arrNums)); // [1, 4, 9, 25]
console.log(arrNums); // [1, 2, 3, 5]