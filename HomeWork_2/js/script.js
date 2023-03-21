let N = Number(prompt("Введіть значення N:"));
let M = Number(prompt("Введіть значення M"));

while (!Number.isInteger(N) || Math.sign(N) === -1) {
    alert('Прохання вводити цілі додатні числа');
    N = Number(prompt("Введіть значення N:"));
}

while (!Number.isInteger(M) || N >= M || Math.sign(M) === -1) {
    alert('Прохання ввести ціле додатнє число M, яке більше N');
    M = Number(prompt("Введіть значення M:"));
}


let resultOddValue = window.confirm("Пропускаємо парні числа?");
console.log(resultOddValue);
document.writeln("Пропускаємо парні числа : " + resultOddValue + "<br>" + "<br>");


let sum = 0;

    if (resultOddValue) {
        for (let i = N; i <= M; i++) {
            if (i % 2 === 0) continue;
            sum += i;
        }
    } else {
        for (let i = N; i <= M; i++) {
            sum += i;
        }
    }


console.log(sum);
document.writeln("Результат: " + sum + "<br>" + "<br>");
