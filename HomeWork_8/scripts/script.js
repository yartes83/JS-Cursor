// 1. створити клас Student
class Student {
    constructor(university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
        this.isActive = true;

    }
// 2. Створіть метод - повертає сукупну інформацію про курс, учбовий заклад та імені студента.
    getInfo() {
        return (`Університет: ${this.university},  Курс: ${this.course}, ФІО: ${this.fullName}, Оцінки: ${(this.marks.length===0 ? 'відсутні' : this.marks.join(', '))}`);
    }
// 3. Створіть геттер оцінок this.marks, який повертає масив оцінок студента
    getMarks() {
        return this.isActive
        ? `Оцінки студента: ${(this.marks.length===0 ? 'відсутні' : this.marks.join(', '))}`
        : 'Студента відраховано';
    }

// 4. Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту.
    set mark(key) {
       if (!this.isActive || !Number.isInteger(key) || key < 0) return;
       this.marks.push(key);
    }

// 5. Створіть метод отримання середнього балу this.getAverageMark()

    getAverageMark() {
        return this.isActive
        ? (this.marks.reduce((a, b) => a + b, 0) / this.marks.length).toFixed()
        : null;
    }
// 6. Створіть метод this.dismiss, який "виключить" студента.
// Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна.
// (Ніяких помилок, просто повертається завжди null замість масиву оцінок)

    dismiss() {
        this.isActive = false;
    }

// 7. Створіть метод this.recover, який дозволить поновити студента
    recover() {
        this.isActive = true;


    }
}

const student = new Student ('Університет Монстрів', 'Жарти і сміх дають енергію', 'Майкл Вазовськи', [5, 4]);
console.log('клас Student: ', student);
console.log('getInfo: ', student.getInfo());
console.log('getMarks: ', student.getMarks())
student.mark = 5
student.mark = 3
student.mark = 4
console.log(student.getMarks())
console.log('getAverageMark: ', student.getAverageMark())
console.log('===========================')
student.dismiss()



console.log('отримаємо оцінки: ', student.getMarks())
console.log('===========================')
student.recover()


student.mark = 3
student.mark = 2
student.mark = 1
console.log(student)



