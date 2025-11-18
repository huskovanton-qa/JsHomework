var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.dsfsdfdsf.dsfsdfdsf@gmail.com" 
    }
];


let regViraz = /^[A-Za-z0-9]+(\.[A-Za-z0-9]+)?@(gmail\.com|yahoo\.com)$/

console.log(regViraz.test(arr[0].email)); 
console.log(regViraz.test(arr[1].email)); 
console.log(regViraz.test(arr[2].email)); 
console.log(regViraz.test(arr[3].email)); 