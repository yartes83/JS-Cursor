// 1. створити клас Student
class Student {
    constructor(university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;

    }
// 2. Створіть метод - повертає сукупну інформацію про курс, учбовий заклад та імені студента.
    getInfo() {
        return (`Університет: ${this.university},  Курс: ${this.course}, ФІО: ${this.fullName}, Оцінки: ${this.marks}`);
    }
// 3. Створіть геттер оцінок this.marks, який повертає масив оцінок студента
    getMarks() {
        return (`Оцінки студента: ${this.marks}`);
    }

// 4. Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту.
    set mark(key) {
        if (key === null) {
             this.marks = null;
        } else if (key === true){
            if (this.marks === null) {
                this.marks = [];
            }
             return  this.marks;
        } else if (key !== null  && this.marks !== null) {
            return this.marks.push(key);
        } else {
            return this.mark = null;
        }
    }

// 5. Створіть метод отримання середнього балу this.getAverageMark()

    getAverageMark() {
        let result = this.marks.reduce(function (prev, item) {
            return prev + item;
        }, 0);
        return (result / this.marks.length).toFixed();
    }
// 6. Створіть метод this.dismiss, який "виключить" студента.
// Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна.
// (Ніяких помилок, просто повертається завжди null замість масиву оцінок)

    dismiss() {
        return this.mark = null;
    }

// 7. Створіть метод this.recover, який дозволить поновити студента
    recover() {
        return this.mark = true


    }
}

const student = new Student ('Університет Монстрів', 'Жарти і сміх дають енергію', 'Майкл Вазовськи', [5, 4]);
console.log('клас Student: ', student);
console.log('getInfo: ', student.getInfo());
console.log(student.getMarks())
student.mark = 5
student.mark = 3
student.mark = 4
console.log(student.getMarks())
console.log('getAverageMark: ', student.getAverageMark())
console.log('===========================')
student.dismiss()

console.log(student.getMarks())
console.log('===========================')
student.recover()
console.log(student.mark)

student.mark = 5
student.mark = 5
student.mark = 5
console.log(student)



