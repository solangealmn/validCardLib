module.exports.cardValidator = function cardValidator(star){
    // console.log(star);
    //Verifica se o valor do input são números
    // if (isNaN(star) || star.length > 16 || star === "") {
    //   // console.log(false);
    //
    //   return false;
    // }
    if ( isNaN(star)) {
        throw new TypeError("stringIsInvalidInput");
    }
    if ( star === null || star === " " ){
        throw new TypeError("missingParameter");
    }
    //Transforma os números em string.
    let stringNumCard = star.toString();
    if ( stringNumCard.length > 16 || stringNumCard.length <= 14 ){
        throw new TypeError("DoesNotHaveTheExpectedLength");
    }
    // console.log(stringNumCard);
    //Passar os números do cartão por um array em ordem inversa;
    var numInvert = stringNumCard.split("").reverse();
    // console.log(numInvert);
    var numberSum = [];
    for ( let i in numInvert ) {
    //Multiplicar por 2 os números das posições pares;
    //Subtrair 9 dos resultados das multiplicações;
        let currentNum = parseInt(numInvert[i]);
        let luhnsAlgo = i % 2 == 0 ? currentNum : currentNum * 2 <= 9 ? currentNum * 2 : currentNum * 2 - 9;
        numberSum.push(luhnsAlgo);
    }
    // console.log(numberSum);
    var sum = numberSum.reduce((acum, num) => acum + num);
    // console.log(sum);
    //Comprovar se o cartão é válido;
    var isValidCard = sum % 10 === 0 ? true : false;
    // console.log(isValidCard);
    return isValidCard;
};
// cardValidator(36490102462661);
// cardValidator("sgfakhfjasfa");
