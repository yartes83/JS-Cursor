const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];


//Завдання №1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом:
function getPairs(students) {
    const girls = students.filter((item) => item.charAt(item.length - 1) === "а");   //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
    const boys = students.filter((item) => item.charAt(item.length - 1) !== "а");   // filter https://www.youtube.com/watch?v=E6V1KTCcYUA ,  https://www.youtube.com/watch?v=sfIMbe4RLug
    const pairsRes = boys.map(item => [item, girls[boys.indexOf(item)]]);   //map https://www.youtube.com/watch?v=Ba-ss43Iz2M,

    return pairsRes;
}
const pairs = getPairs(students);
console.log(pairs)

//Завдання №2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати:
function getThemesAndStudents (pairs, themes){
    let result = pairs.map(item => [item.join(' і '), themes[pairs.indexOf(item)]]);

    return result;
}
console.log(getThemesAndStudents(pairs, themes))

//Завдання №3. Зіставте оцінки(marks) зі студентом(students):
function studentsMarks (students, marks) {
    let result = students.map(item => [item, marks[students.indexOf(item)]]);
    return result;
}
console.log(studentsMarks (students, marks))

const themesAndStudents = getThemesAndStudents(pairs, themes);
console.log(themesAndStudents)

//Завдання №4. Поставте кожній парі випадкову оцінку(від 1 до 5):
function getRandomMarks (themesAndStudents) {
    let randomMark = Math.floor(Math.random() * 5) + 1; // https://stackoverflow.com/questions/21483667/concept-of-math-floormath-random-5-1-what-is-the-true-range-and-why
    result = themesAndStudents.map(item => [item.join(', '),randomMark]);

    return result
}
let groupResults = getRandomMarks (themesAndStudents);
console.log(groupResults)










