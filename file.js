function pow (a, b) {
    let result  = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    return result; //але це при умові що b - ціле невід'ємне, бо тоді не вийде( треба буде, щось доадтково писати)
}

//console.log(pow(3, 3));