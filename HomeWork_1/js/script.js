const priceSweetmeats = 15.678;
const priceIceCream = 90.2345;
const pricePie = 123.965;

//Використовуючи вбудований об'єкт Math – виведіть максимальне число:
console.log("Максимальне число:" + (Number(Math.max(priceSweetmeats, priceIceCream, pricePie))));
document.writeln("Максимальне число: " + Number(Math.max(priceSweetmeats, priceIceCream, pricePie)) + " грн" + "<br>" + "<br>");


//Використовуючи вбудований об'єкт Math – виведіть мінімальне число:
console.log("Мінімальне число: " + (Number(Math.min(priceSweetmeats, priceIceCream, pricePie))));
document.writeln("Мінімальне число: " + Number(Math.min(priceSweetmeats, priceIceCream, pricePie)) + " грн" + "<br>" + "<br>");


//Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму:
let priceSum = priceSweetmeats + priceIceCream + pricePie;
console.log("Вартість всіх товарів: " + (Number(priceSum)));
document.writeln("Вартість всіх товарів: " + priceSum + " грн" + "<br>" + "<br>");


//Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону:
console.log("Округлення суми в меньшу сторону: " + (Math.floor(priceSum)));
console.log("Округлення суми в меньшу сторону(parseInt): " +  (parseInt(priceSum))); //мабуть так не можна, нагуглив щось таке. Проте результат такий самий. Це через велику терпимість JS до кривого коду?
document.writeln("Округлення суми в меньшу сторону: " + (Math.floor(priceSum)) + " грн" + "<br>" + "<br>" );


//Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300):
console.log("Сума товарів, округлена до сотень: " + (Math.ceil(priceSum / 100.0) * 100.0)); //нагуглив :)
document.writeln("Сума товарів округлена до сотень: " + (Math.ceil(priceSum / 100.0) * 100.0) + " грн" + "<br>" + "<br>" );


//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
if ((Math.floor (priceSum)) % 2 == 0) {
    console.log("Сума товарів: парна");
    document.writeln("Сума товарів: парна" + "<br>" + "<br>");
}
else {
    console.log("Сума товарів: не парна");
    document.writeln("Сума товарів: не парна" + "<br>" + "<br>");
}

//Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн:
console.log(("Сума решти, при оплаті всіх товарів, якщо клієнт платить 500 грн: " + Math.abs((priceSum) - 500)) + " грн");
document.writeln("Сума решти, при оплаті всіх товарів, якщо клієнт платить 500 грн: " + Math.abs((priceSum)  - 500) + " грн" + "<br>" + "<br>")

//Виведіть середнє значення цін, округлене до другого знаку після коми:
console.log("Cереднє значення цін, округлене до другого знаку після коми:" + Number(
    Math.round((priceSum)) / 3
).toFixed(2)
)
document.writeln("Cереднє значення цін, округлене до другого знаку після коми:" + Number(
    Math.round((priceSum)) / 3
).toFixed(2) + " грн" + "<br>" + "<br>"
)


//Створіть змінну, в якої збережіть випадкову знижку:
const randomValue = ((100 - 1) * Math.random() + 1).toFixed(0);
console.log("випадкова знижка: " + randomValue);
document.writeln("Випадкова знижка: " + randomValue + "%" + "<br>" + "<br>");

//Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми:
console.log("сума до сплати: " +
    (
        (priceSum) - (((priceSum) / 100 * randomValue).toFixed(2))
    ).toFixed(2)
)
document.writeln("Сума до сплати: " +
    (
        (priceSum) - (((priceSum) / 100 * randomValue).toFixed(2))
    ).toFixed(2) + " грн" + "<br>" + "<br>"
)

//Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни:
const totalPrice = priceSweetmeats + priceIceCream + pricePie; //загальна вартість
console.log("загальна вартість: " + totalPrice);
document.writeln("Загальна вартість: " + totalPrice + " грн" + "<br>" + "<br>")

const costPrice = totalPrice / 2; //собівартість
console.log("собівартість: " + costPrice);
document.writeln("Собівартість: " + costPrice + " грн" + "<br>" + "<br>");

const clientPay = ((priceSum) - (((priceSum) / 100 * randomValue).toFixed(2))).toFixed(2);
console.log("клієнт заплатив: " + clientPay);
document.writeln("Клієнт заплатив: " + clientPay + " грн" + "<br>" + "<br>");

const howMuch = (totalPrice - clientPay).toFixed(3);
console.log("на скільки менше заплатив: " + howMuch);
document.writeln("На скільки менше заплатив: " + howMuch + " грн" + "<br>" + "<br>");

const profit = (costPrice - howMuch).toFixed(3); //чистий прибуток
console.log("чистий прибуток: " + profit);
document.writeln("Чистий прибуток: " + profit + " грн" + "<br>" + "<br>");

































