let services = {
  "стрижка": 60,
  "гоління": 80,
  "Миття голови": 100,

  set addService(data) {
    let [name, price] = data;
    services[name] = price; 
  },

 get price() {
    let total = 0;
    for (let key in services) {
        total += services[key];
      }
    return total;
  },

   get minPrice() {
    let min = Infinity;
    for (let key in services) {
      const v = services[key];
      if (v < min) {
        min = v;
      }
    }
    return min;
  },

  get maxPrice() {
    let max = -Infinity;
    for (let key in services) {
      const v = services[key];
      if (v > max) {
        max = v;
      }
    }
    return max;
  }
};

//підлегдів цей шматок кода в gpt, бо через гетер price(), коли в мене цикл доходив до нього,
//він знову викликав гетер price() і так далі, в результаті чого виникала помилка переповнення стека викликів.
Object.defineProperties(services, {
  price:     { enumerable: false },
  minPrice:  { enumerable: false },
  maxPrice:  { enumerable: false },
  addService:{ enumerable: false }
});


services.addService = ["Розбити скло", 101];
services.addService = ["Брови", 1];

console.log(services.price);      
console.log(services.minPrice); 
console.log(services.maxPrice); 
