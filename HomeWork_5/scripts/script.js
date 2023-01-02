// 1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.

function getRandomArray (length, min, max) {
    let arr = [];

    for (let i = 0; i <= length; i++){
        arr.push(Math.round(min - 0.5 + Math.random() * (max - min +1)));
    }
    return arr;
}
console.log(getRandomArray (10, 1, 10))

// 2. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції:

function filterEvenNumbers (...numbers) {

    const result = numbers.filter((numbers) => numbers % 2 !== 0).join(", ")

    return result
}

//3. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів:

function getMedian(...values) {


    values.sort( function(a,b) {return a - b;} );

    let half = Math.floor(values.length/2);

    if(values.length % 2)
        return values[half];
    else
        return (values[half-1] + values[half]) / 2.0;
}

console.log(getMedian(1, 2, 3, 4, 5))

//4. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0:

function countPositiveNumbers(...numbers) {

    let number = [0];

    numbers.forEach( function(n) {if (n > 0)
        number[0]++;
    } )

    return number
}

console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6))

// 5. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5:

function getDividedByFive(...numbers) {
    let result = numbers.filter((number) => number % 5 === 0).join(", ");

    return result;
}
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))

// 6. Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру.
function divideByThree (words) {

    let wordsNoSpace = words.toLowerCase().replaceAll(" ", "");
    let divided = wordsNoSpace.match(/.{1,3}/gi);

    return divided;
}

console.log(divideByThree("Commander"))










