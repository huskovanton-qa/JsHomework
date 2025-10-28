'number' + 3 + 3 //'number33'
//'number' + 3  // перетворення 3 → '3' → 'number3'
//'number3' + 3 // перетворення 3 → '3' → 'number33'


null + 3 // 3
//null → 0 при числовій операції
//0 + 3 = 3


5 && "qwerty" // "qwerty"
/*Оператор && повертає перше "невірне" значення або останнє, якщо всі істинні
5 → truthy
"qwerty" → truthy → повертається останнє*/

+'40' + +'2' + "hillel"; // '42hillel'
/*
+'40' → 40
+'2' → 2
40 + 2 = 42
42 + "hillel" → "42" + "hillel" = "42hillel"
*/



'10' - 5 === 6; // false
/*
'10' - 5 → 10 - 5 = 5 (string → number)
5 === 6 → false
*/

true + false // 1
/*
true → 1
false → 0
1 + 0 = 1

*/

'4px' - 3 // NaN
/*
'4px' неможливо перетворити у число → NaN
NaN - 3 → NaN

*/

'4' - 3 // 1
/*
'4' → 4
4 - 3 = 1
*/

'6' + 3 ** 0; // '61'
/*
3 ** 0 = 1
'6' + 1 → '61'
*/

12 / '6' // 2
/*
'6' → 6
12 / 6 = 2
*/

'10' + (5 === 6); // '10false'
/*
5 === 6 → false
'10' + false → '10false'
*/

null == '' // false
/*
null рівний лише undefined
*/

3 ** (9 / 3); // 27
/*
9 / 3 = 3
3 ** 3 = 27
*/

!!'false' == !!'true' // true
/*
'false' → truthy → !!'false' → true
'true' → truthy → !!'true' → true
true == true → true
*/

0 || '0' && 1 // 1
/*
'0' → truthy
'0' && 1 → 1
0 || 1 → 1
*/

(+null == false) < 1; // false
/*
+null → 0
0 == false → true
true < 1 → 1 < 1 → false
*/

false && true || true // true
/*
false && true → false
false || true → true
*/

false && (false || true); // false
/*
false || true → true
false && true → false
*/

(+null == false) < 1 ** 5; // false
/*
+null → 0
0 == false → true → 1
1 ** 5 = 1
1 < 1 → false
*/