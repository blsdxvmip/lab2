const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

// Средний балл
function calculateAverage(data) {
    let sum = 0;

    for (const student of data) {
        sum += student.score;
    }

    return sum / data.length;
}

// Студент с самым высоким баллом
function findTopStudent(data) {
    let topStudent = data[0];

    for (const student of data) {
        if (student.score > topStudent.score) {
            topStudent = student;
        }
    }

    return topStudent.name;
}

// Студенты с баллом ниже проходного
function filterFailed(data, passScore) {
    const failed = [];

    for (const student of data) {
        if (student.score < passScore) {
            failed.push(student.name);
        }
    }

    return failed;
}

// Добавление буквенных оценок
function addLetterGrade(data) {
    return data.map(function(student) {
        let letter;

        if (student.score >= 90) {
            letter = "A";
        } else if (student.score >= 75) {
            letter = "B";
        } else {
            letter = "C";
        }

        return { ...student, letter: letter };
    });
}

console.log("Средний балл:", calculateAverage(grades));
console.log("Лучший студент:", findTopStudent(grades));
console.log("Должники:", filterFailed(grades, 60));
console.log("Буквенные оценки:", addLetterGrade(grades));
