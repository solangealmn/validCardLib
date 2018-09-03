function cardValidator(star){
  // console.log(star);
  //Verifica se o valor do input são números
  if (isNaN(star) || star.length > 16 || star.value === "") {
    // console.log(false);
    return false;
  }
  //Passar os números do cartão por um array em ordem inversa;
  let stringNumCard = star.toString();
  // console.log(stringNumCard);
  let numInvert = stringNumCard.split('').reverse();
  // console.log(numInvert);
  var numberSum = [];
  for ( let i in numInvert) {
    //Multiplicar por 2 os números das posições pares;
    //Subtrair 9 dos resultados das multiplicações;
    let currentNum = parseInt(numInvert[i])
    let algLuhn = i % 2 == 0 ? currentNum : currentNum * 2 <= 9 ? currentNum * 2 : currentNum * 2 - 9;
    numberSum.push(algLuhn);
  }
   console.log(numberSum);
  var sum = numberSum.reduce((acum, num) => acum + num)
  console.log(sum);
  //Comprovar se o cartão é válido;
  var isValidCard = sum % 10 === 0 ? true : false;
  console.log(isValidCard);
}
cardValidator(5256631727985881);
// cardValidator("sgfakhfjasfa");
