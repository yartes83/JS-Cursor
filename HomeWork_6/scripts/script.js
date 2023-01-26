const students = [
    {
        name: "Tanya",
        course: 3,
        subjects: {
            math: [4, 4, 3, 4],
            algorithms: [3, 3, 3, 4, 4, 4],
            data_science: [5, 5, 3, 4]
        }
    },
    {
        name: "Victor",
        course: 4,
        subjects: {
            physics: [5, 5, 5, 3],
            economics: [2, 3, 3, 3, 3, 5],
            geometry: [5, 5, 2, 3, 5]
        }
    },
    {
        name: "Anton",
        course: 2,
        subjects: {
            statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
            english: [5, 3],
            cosmology: [5, 5, 5, 5]
        }
    }
]


// 1. Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента.
// Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл
function getSubjects(name) {
    let student = students.find( obj=>obj.name == name );

    for ( let key in student ){
        result = Object.keys( student.subjects ).reduce( (accum, letter) =>
                accum.concat( letter[0].toUpperCase() + letter.slice(1) ),
            []).join(", ").replaceAll("_", " ").split(", ");
    }
    return result;
    }
 console.log('Завдання №1: ', getSubjects("Victor"));

//---------------------------------------------------------------------------------------------------------------------------
//2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2oго знаку.
//затупив, думав передавати треба ім'я студента, а не індекс
function getAverageMark(name){
    let sum = 0;
    let arr;
    let student = students.find( obj=>obj.name == name );
    for ( let key in student ) {
           arr = Object.values( student.subjects ).reduce( (prev, item) => {
            return ( prev.concat(item) );
        });
    }
    for ( let i = 0; i < arr.length; i++){
        sum+= arr[i];
    }
    return ( sum / arr.length ).toFixed(2);
}
console.log('Завдання №2: ', getAverageMark("Tanya"))

// а тут через індекс
function getAverageMarkNew(students) {
    let sum = 0;
    let arr = [];

    for ( let key in students ) {
        arr = Object.values( students.subjects ).reduce( (prev, item) => {
            return ( prev.concat(item) );
        });
    }
    for ( let i = 0; i < arr.length; i++){
        sum+= arr[i];
    }
    return ( sum / arr.length ).toFixed(2);
}

console.log('Завдання №2(індекс): ',  getAverageMarkNew(students[1]))

//---------------------------------------------------------------------------------------------------------------------------
//3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання).
// ПОвинна бути виведена інформація: курс, ім'я, середня оцінка:

function getStudentInfo(name) {
    let student = students.find( obj=>obj.name == name );
    for (let key in student) {
        course = student.course;
    }
    return {
        "course": course,
        "name": student.name,
        "averageMark": getAverageMark(name)
    };
}
console.log('Завдання №3: ', getStudentInfo("Tanya"))

//---------------------------------------------------------------------------------------------------------------------------
// 4. Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку:

function getStudentsNames(students) {
    let studentsNames = students.map((a) =>
        a.name).sort();                     //https://medium.com/@stasonmars/%D0%BA%D0%B0%D0%BA-%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C-%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D1%83-%D0%B2-javascript-%D0%BF%D1%80%D0%B8-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D0%B8-sort-d492c97ccfdf
    return studentsNames;
}
console.log('Завдання №4: ', getStudentsNames(students))

//---------------------------------------------------------------------------------------------------------------------------
// 5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки:

function getBestStudent(students) {
    let best = students.reduce((prev, item) => {
        if (getAverageMarkNew(prev) > getAverageMarkNew(item)) {
            return prev;
        } else {
            return item;
        }
    });
    return best.name;
}
console.log('Завдання №5: ', getBestStudent(students));

//6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень:
// тут щось реально затупив. Знайшов щось схоже тут: https://qna.habr.com/q/780005
function calculateWordLetters(str) {
    const symbols = new Map();
    for (const c of str) {
        const currCount = symbols.get(c) || 0;
        symbols.set(c, currCount + 1);
    }
    const orderedSymbols = [...symbols.entries()];
    return orderedSymbols.reduce((prev, item) => {
        return (prev.concat(item));
    });
}

console.log('Завдання №6: ', calculateWordLetters("абабагаламага"));


function calculateWordLetters1 (str) {
    return Object.entries([...str].reduce((acc, n) => (acc[n] = (acc[n] || 0) + 1, acc), {}));
}

console.log(calculateWordLetters1("тест"));





















