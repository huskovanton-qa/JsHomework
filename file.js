function pow (a, b) {
    let result  = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    if (b < 0) {
        for (let i = 0; i < -b; i++) {
            result /= a;
        }   
    }
    return result; 
}

console.log(pow(30, -1));
console.log(pow(3, 3));