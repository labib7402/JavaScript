//Accessing & Modifying Properties:

//Accessing

//1. Dot Notation (.)
// অবজেক্টের নামের পর একটি ডট (.) দিয়ে প্রপার্টি বা key-এর নাম লিখতে হয়।
const student = {
    name: "Ayman",
    roll: 101,
    subject: "Computer Science"
};

console.log(student.name);    // Output: Ayman
console.log(student.subject); // Output: Computer Science

//2. Bracket Notation ([''])
// থার্ড ব্র্যাকেট [] এর ভেতরে কোটেশন "" দিয়ে প্রপার্টির নাম লিখতে হয়।
//যদি key-এর ভেতরে স্পেস থাকে, হাইফেন থাকে (যেমন: first-name), বা key যদি কোনো সংখ্যা হয়,
//তখন বাধ্যতামূলক Bracket Notation ব্যবহার করতে হবে (Dot notation দিয়ে এগুলো পড়া যায় না)।
const person = {
    name: "Karim",
    "home city": "Dhaka", // Key-তে স্পেস (space) আছে
    123: "Room Number"    // Key হিসেবে সংখ্যা দেওয়া হয়েছে
};

console.log(person["name"]);        // Output: Karim
console.log(person["home city"]);   // Output: Dhaka
console.log(person[123]);           // Output: Room Number

//3. Dynamic Property Access
//(ডাইনামিক কি) কখনো কখনো আমাদের জানা থাকে না আমরা ঠিক কোন্ প্রপার্টি এক্সেস করbo
//সেটি কোনো ভেরিয়াবলে জমা থাকতে পারে। সে ক্ষেত্রে Bracket Notation ছাড়া কোনো উপায় নেই।
const user = {
    id: 55,
    username: "coder_rahim",
    email: "rahim@example.com"
};

// ধরুন কোনো ব্যবহারকারী ইনপুট দিল সে "email" দেখতে চায়
const userChoice = "email";

// ভেরিয়াবল দিয়ে এক্সেস করার সঠিক নিয়ম (কোটেশন দেওয়া যাবে না)
console.log(user[userChoice]); // Output: rahim@example.com

// ❌ ভুল নিয়ম:
// console.log(user.userChoice); // Output: undefined (কারণ user-এর মধ্যে 'userChoice' নামে কোনো প্রপার্টি নেই)






// Modifying Properties (মান পরিবর্তন, নতুন যোগ ও ডিলিট করা)

//1. প্রপার্টির মান আপডেট (Update) করা
//বিদ্যমান কোনো প্রপার্টিতে নতুন মান সেট করলে আগের মান বদলে যায়।
const phone = {
    brand: "Samsung",
    price: 30000
};

// মূল্য বাড়িয়ে ৩৫০০০ করা হলো
phone.price = 35000;

console.log(phone); 
// Output: { brand: 'Samsung', price: 35000 }

//2. নতুন প্রপার্টি যোগ (Add) করা
//অবজেক্টে তৈরি করার সময় না থাকলেও পরবর্তীতে যেকোনো সময় নতুন key ও value যোগ করা যায়।
const laptop = {
    brand: "Dell",
    ram: "8GB"
};

// নতুন প্রপার্টি যোগ করা
laptop.ssd = "512GB";
laptop["color"] = "Black"; // Bracket notation দিয়েও করা যায়
laptop.id= [345]          // number er jonn must [] dite hobe
console.log(laptop); 
// Output: { brand: 'Dell', ram: '8GB', ssd: '512GB', color: 'Black' }

//3. প্রপার্টি মুছে ফেলা (Delete)
//elete কিওয়ার্ড ব্যবহার করে অবজেক্টের যেকোনো প্রপার্টি পুরোপুরি ডিলিট করা যায়।
const course = {
    title: "JavaScript Mastery",
    duration: "3 Months",
    isDiscountAvailable: false
};

// 'isDiscountAvailable' প্রপার্টিটি ডিলিট করে দেওয়া হলো
delete course.isDiscountAvailable;

console.log(course); 
// Output: { title: 'JavaScript Mastery', duration: '3 Months' }





//practics
const book = {
    title: "JS Bassics",
    price: ["450"],
    "font end": "With React"

}
console.log(book["font end"])  //jodi propaatir name er moddho word bade(spase/onno carecter) thake tobe[] hobe
console.log(book)
book.price = "500"
book.author = "Labib"
delete book.price
delete book["font end"];