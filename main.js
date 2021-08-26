// Работа с переменными
let user = "John Doe";
console.log(user);

let student = "Yuliya";
console.log(student);

user = student; // Yuliya
console.log(user);


// Работа с примитивами
let test = 1;
test += '1'; // 11
console.log(test);

test -= test -1; // 10
console.log(test);

test = Boolean;
console.log (Boolean(test)); // true


// С помощью цикла for найдите произведение элементов этого массива
let arr = [2, 3, 5, 8];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);


// С помощью цикла for и оператора if выведите в консоль те элементы массива, которые больше 5-ти, но меньше 10-ти.
let arr1 = [2, 5, 8, 15, 0, 6, 20, 3];
for(i = 0; i < arr1.length; i++) {
    if (arr1[i] > 5 && arr1[i] < 10) {
        console.log(arr1[i]);
    }
}

// С помощью цикла for и оператора if выведите в консоль четные элементы массива
let arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (i = 0; i < arr2.length; i++) {
    if (!(arr2[i] % 2)) {
        console.log(arr2[i]);
    }
}
