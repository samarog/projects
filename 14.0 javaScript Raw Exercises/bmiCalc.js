function bmiCalc (peso, altura) {

  let bmi = Math.round(peso/(Math.pow(altura, 2)));
  
  console.log(`O seu peso é ${peso}kg. A sua altura é ${altura} metros. O seu índice de massa corporal é de ${bmi}.`);

  return bmi

}

let bmi = bmiCalc(66, 1.7);
console.log(bmi);
