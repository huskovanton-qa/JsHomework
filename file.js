function checkProbabilityTheory(count) {
  
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let parni = 0; 
  let neParni = 0;  

 
  for (let i = 0; i < count; i++) {
    let int = getRandomInt(100, 1000);
    if (int % 2 === 0) {
      parni++;
    } else {
      neParni++;
    }
  }

  let evenParni = (parni / count) * 100;

  return `Мі передали ${count} чисел. Парних - ${parni}, непарних - ${neParni}. Відсоток парних до непарних - ${evenParni}`
}

console.log(checkProbabilityTheory(101))
