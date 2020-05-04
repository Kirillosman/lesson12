let studentKolya = {
    firstName: "Kolya", 
    lastName: "Ivanov", 
    age: 19, 
    grades: [5,3,2,5,4], 
    course: 2, 
    gender: "male",
};
let studentPetya = {
    firstName: "Petya", 
    lastName: "Ivanov", 
    age: 21, 
    grades: [4,2,2,5,5], 
    course: 4, 
    gender: "male",
};
let studentAnna = {
    firstName: "Anna", 
    lastName: "Ivanova", 
    age: 20, 
    grades: [4,2,2,5,5], 
    course: 3, 
    gender: "female",
};
let studentAnton = {
    firstName: "Anton", 
    lastName: "Petrov", 
    age: 20, 
    grades: [2,2,2,4,5], 
    course: 3, 
    gender: "male",
};
let studentVasya = {
    firstName: "Vasya", 
    lastName: "Semenov", 
    age: 22, 
    grades: [2,1,2,3,4], 
    course: 5, 
    gender: "male",
};
let studentVova = {
    firstName: "Vova", 
    lastName: "Chibrik", 
    age: 18, 
    grades: [1,2,1,4,2], 
    course: 1, 
    gender: "male",
};
let studentOlya = {
    firstName: "Olya", 
    lastName: "Kartopla", 
    age: 19, 
    grades: [1,2,3,4,2], 
    course: 2, 
    gender: "female",
};
let studentKostya = {
    firstName: "Kostya", 
    lastName: "Rembo", 
    age: 21, 
    grades: [3,4,4,4,3], 
    course: 4, 
    gender: "male",
};
let studentArtem = {
    firstName: "Artem", 
    lastName: "Panda", 
    age: 18, 
    grades: [3,4,5,4,5], 
    course: 1, 
    gender: "male",
};
let studentMasha = {
    firstName: "Masha", 
    lastName: "Nevasha", 
    age: 19, 
    grades: [2,2,3,4,3], 
    course: 2, 
    gender: "female",
};

let arrayStudents = [studentKolya, studentPetya, studentAnna, studentAnton, studentVasya, studentVova, studentOlya, studentKostya, studentArtem, studentMasha];

for (let i = 0; i < arrayStudents.length; i = i + 1) {
    let sum = 0;
    for(let j = 0; j < arrayStudents[i].grades.length; j = j + 1) {
    sum = sum + arrayStudents[i].grades[j];
    };
    let avg = sum / arrayStudents[i].grades.length;
    for (let i = 0; i < arrayStudents.length;  i++) {
        if (avg <= 3 && arrayStudents[i].gender == "male" && arrayStudents[i].age >= 18){
        arrayStudents[i].isReadyForArmy = true;
        };
    };
 }; 

let Army = [];

for (let x = 0; x < arrayStudents.length; x++) {
    if (arrayStudents[x].isReadyForArmy = true) {
        delete arrayStudents.grades;
        delete arrayStudents.course;
        Army.push(arrayStudents[x]);
            
    };
};
    console.log(Army);
 



