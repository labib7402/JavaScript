//step-1
// variable এর মধ্যে সরাসরি key-value দিয়ে অবজেক্ট বানানো
// খালি অবজেক্ট বানিয়ে পরে মান দেওয়া
const user0 = new Object();
user0.name = "jakir";
user0.age = 21;
user0.rol = 25;

console.log(user0); //output: { name: 'jakir', age: 21, rol: 25 }

//step-2
// Creating Objects (অবজেক্ট তৈরি করা)
//object literal ব্র্যাকেটের {} ভেতরে সরাসরি key-value দিয়ে তৈরি
const user1 = {
  name: "Labib",
  age: 22,
  rol: 68,
  cgpa: 3.35
};
console.log(user1); //output: { name: 'Labib', age: 22, rol: 68, cgpa: 3.35}

const user2 = {
  name: "omor",
  age: 21,
  rol: 69,
  cgpa: 3.38
};
console.log(user2); //output: { name: 'omor', age: 21, rol: 69, cgpa: 3.38 }

const user3 = {
  name: "Imran",
  age: 22,
  rol: 34,
  cgpa: 3.33
};
console.log(user3); //output: { name: 'Imran', age: 22, rol: 34, cgpa: 3.33 } 




//step-3
//adding constructor
function student( name, age, rol, cgpa) {
  this.name = name;
  this.age = age;
  this.rol = rol;
  this.cgpa = cgpa;
}

student1 = new student("Labib", 22, 68, 3.35);
student2 = new student("omor", 21, 69, 3.38);
student3 = new student("Imran", 22, 34, 3.33);

console.log(student1); //output: student { name: 'Labib', age: 22, rol: 68, cgpa: 3.35 }
console.log(student2); //output: student { name: 'omor', age: 21, rol: 69, cgpa: 3.38 }
console.log(student3); //output: student { name: 'Imran', age: 22, rol: 34, cgpa: 3.33 }



//step-4 adding function in constructor
function student( name, age, rol, cgpa) {
  this.name = name;
  this.age = age;
  this.rol = rol;
  this.cgpa = cgpa;
  this.display = function() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Rol: ${this.rol}, Cgpa: ${this.cgpa}`);

    students1 = new student("tuhin", 22, 68, 3.35);
    students2 = new student("sabbir", 21, 69, 3.38);
    students3 = new student("rifat", 22, 34, 3.33);

    students1.display(); //output: Name: tuhin, Age: 22, Rol: 68, Cgpa: 3.35
    students2.display();  //output: Name: sabbir, Age: 21, Rol: 69, Cgpa: 3.38
    students3.display();  //output: Name: rifat, Age: 22, Rol: 34, Cgpa: 3.33
    
  }
}