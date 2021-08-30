// создайте функцию palindrome, которая будет возвращать bool
str1 = 'клык';
let result = str1.split('').reverse().join('');
if (str1 === result) {
    console.log(true)
} else {
    console.log(false);
}
// и/или
function Palindrome(str) {
  if (str === str.split('').reverse().join(''))
        {return true;}
  else
        return false;
}
console.log(Palindrome('qwewq'))


// напишите функцию min(a,b), которая возвращает меньшее из чисел;
let min = (a, b) => {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
console.log(min(8, 5));
// вар 2
let min1 = (a, b) => a < b ? a : b;
console.log(min1 (8, 5));



// напишите функцию max(a,y), которая возвращает большее из чисел;
let max = (a, b) => {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(max(8, 5));
// вар 2
let max1 = (a, b) => a > b ? a : b;
console.log(max1 (8, 5));


// создайте массив с десятью случайными элементами от 0 до 100
//  и напишите функцию, которая будет заменять все 0 на строку 'zero';
let arr = [12, 53, 20, 18, 22, 100, 43, 57, 50, 1];
let addZero = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        if (!(arr[i] % 10)) {
            arr[i] = ('' + arr[i]).replaceAll('0', 'zero')
        }
    }
    return arr;
}
console.log(addZero(arr));
