const regViraz = /[^Aa]{6,}/;

console.log(regViraz.test("Wonderful"));
console.log(regViraz.test("Joyful")); 
console.log(regViraz.test("Happiness")); 
console.log(regViraz.test("Time")); 
console.log(regViraz.test("Task")); 
console.log(regViraz.test("Apple")); 
