module.exports.cardValidator = function cardValidator(numb){
    if ( isNaN(numb)) {
        throw new TypeError("stringIsInvalidInput");
    }
    if ( numb === null || numb === " " ){
        throw new TypeError("missingParameter");
    }
    let stringNumCard = numb.toString();
    if ( stringNumCard.length > 16 || stringNumCard.length < 14 ){
        throw new TypeError("DoesNotHaveTheExpectedLength");
    }
    let numInvert = stringNumCard.split("").reverse();
    let numberSum = [];
    for ( let i in numInvert ) {
        let currentNum = parseInt(numInvert[i]);
        let luhnsAlgo = i % 2 == 0 ? currentNum : currentNum * 2 <= 9 ? currentNum * 2 : currentNum * 2 - 9;
        numberSum.push(luhnsAlgo);
    }
    let sum = numberSum.reduce((acum, num) => acum + num);
    return sum % 10 === 0 ? true : false;
};
