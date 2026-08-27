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
