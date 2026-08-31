//1. Basic Method (অবজেক্টের ভেতর মেথড তৈরি)
//অবজেক্টের ভেতরে সাধারণ প্রপার্টির মতোই মেথড তৈরি করা হয়, শুধু Value-এর জায়গায় একটি ফাংশন বসাতে হয়।
const user = {
    name: "Sakib",
    age: 24,
    
    // এটি একটি Object Method
    greet: function() {
        console.log("Hello! Welcome to JS world.");
    }
};

// মেথড কল (Call) করার নিয়ম: ডট দিয়ে ব্র্যাকেট () দিতে হয়
user.greet(); // Output: Hello! Welcome to JS world.




//2. ES6 Method Shorthand (আধুনিক ও সহজ নিয়ম)
//ES6-এ মেথড লেখার জন্য function শব্দটি না লিখে আরও সংক্ষেপে লেখা যায়।
//বাস্তব জীবনে ডেভেলপাররা এই নিয়মটিই সবচেয়ে বেশি ব্যবহার করেন।

const calculator = {
    // সংক্ষেপে মেথড লেখা
    add(a, b) {
        return a + b;
    },
    multiply(a, b) {
        return a * b;
    }
};

console.log(calculator.add(10, 5));      // Output: 15
console.log(calculator.multiply(4, 3)); // Output: 12





//3.. this Keyword (সবচেয়ে গুরুত্বপূর্ণ বিষয়)
//মেথডের ভেতরে দাঁড়িয়ে ওই একই অবজেক্টের অন্যান্য প্রপার্টি (যেমন: name, age)
// ব্যবহার করতে হলে this কিওয়ার্ড ব্যবহার করতে হয়।

const person = {
    firstName: "Tamim",
    lastName: "Iqbal",
    profession: "Cricketer",

    // 'this' ব্যবহার করে পুরো নাম ও পরিচয় তৈরি
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    introduce() {
        // this.getFullName() দিয়ে ভেতরের আরেক মেথডকেও ডাকা যায়
        console.log(`Hi, I am ${this.getFullName()} and I am a ${this.profession}.`);
    }
};

console.log(person.getFullName()); // Output: Tamim Iqbal
person.introduce();               // Output: Hi, I am Tamim Iqbal and I am a Cricketer.




const person2 = {
    firstName: "Labib",
    lastName: "Sarkar",
    age: "22",
    fulname() {
        return `${this.firstName} ${this.lastName}`;
    },

    addnew() {
        console.log(`Hey, I am ${this.fulname()} I am ${this.age} years old`);
    }
}

console.log(person2.fulname())    //output: Labib Sarkar
person2.addnew()                 //output: Hey, I am Labib Sarkar I am 22 years old