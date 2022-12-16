let N = Number(prompt("Введіть значення N:"));
console.log(N);
document.writeln("Значення змінної N: " + N + "<br>" + "<br>");

if (!Number.isInteger(N)) {
    alert("Прохання вводити цілі числа");
}


let M = Number(prompt("Введіть значення M"));
console.log(M);
document.writeln("Значення змінної M: " + M + "<br>" + "<br>");
if (!Number.isInteger(M)) {
    alert("Прохання вводити цілі числа");
}


let resultOddValue = window.confirm("Пропускаємо парні числа?");
console.log(resultOddValue);
document.writeln("Пропускаємо парні числа?: " + resultOddValue + "<br>" + "<br>");

let sum = 0;

if (resultOddValue) {
    for (let i = N; i <= M; i++) {
        if (i % 2 == 0) continue;
        sum += i;
    }
} else {
    for (let i = N; i <= M; i++) {
        sum += i;
    }
}
console.log(sum)
document.writeln("Результат: " + sum + "<br>" + "<br>");
