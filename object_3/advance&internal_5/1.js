//1. Object Property Descriptors (Object.defineProperty)

//জাভাস্ক্রিপ্টে অবজেক্টের প্রতিটি প্রপার্টির পেছনে লুকানো ৩টি সিক্রেট ফ্ল্যাগ (Flag) থাকে, যা নিয়ন্ত্রণ করে ওই প্রপার্টিটি কেমন আচরণ করবে:

const user = {};

// ডেসক্রিপটর দিয়ে প্রপার্টি তৈরি
Object.defineProperty(user, "id", {
    value: 101,
    writable: false,     // মান বদলানো যাবে না
    enumerable: false,   // লুপে বা Keys-এ দেখাবে না
    configurable: false  // ডিলেট করা যাবে না
});

user.id = 202; // ❌ পরিবর্তন হবে না (101-ই থাকবে)
delete user.id; // ❌ ডিলেট হবে না

console.log(Object.keys(user)); // Output: [] (লুকানো প্রপার্টি)
console.log(user.id);           // Output: 101




//2. Prototypes & Inheritance
//জাভাস্ক্রিপ্টে সব অবজেক্টেরই একটি লুকানো লিংক থাকে যাকে Prototype বলে (__proto__)। যদি অবজেক্টের নিজের ভেতর কোনো
// প্রপার্টি বা মেথড না থাকে, তবে সে তার প্রোটোটাইপ চেইন (Prototype Chain) বেয়ে ওপরে খুঁজে নিয়ে আসে।

// প্যারেন্ট অবজেক্ট (Parent)
const animal = {
    eats: true,
    walk() {
        console.log("Animal is walking...");
    }
};

// animal-কে প্রোটোটাইপ বানিয়ে নতুন অবজেক্ট তৈরি
const dog = Object.create(animal);
dog.bark = true;

console.log(dog.bark); // Output: true (নিজের প্রপার্টি)
console.log(dog.eats); // Output: true (প্রোটোটাইপ chain থেকে পাওয়া!)
dog.walk();            // Output: Animal is walking...



//৩. Map vs Object vs Set (বিশেষ কালেকশন)

//সাধারণ অবজেক্ট দিয়ে সব ডেটা গুছানো সম্ভব হয় না, তাই ES6-এ Map এবং Set আনা হয়েছে।


//A. Object বনাম Map
const myMap = new Map();

// যেকোনো কিছুকে Key হিসেবে ব্যবহার করা যায়
const keyObj = { id: 1 };
myMap.set(keyObj, "Object Key Data");

console.log(myMap.get(keyObj)); // Output: Object Key Data
console.log(myMap.size);         // Output: 1

//B.set (একই ধরনের ডেটা গুছানো, ডুপ্লিকেট থাকবে না)
const numbers = new Set();

numbers.add(10);
numbers.add(20);
numbers.add(10); // ❌ ডুপ্লিকেট, জমা হবে না

console.log(numbers); // Output: Set(2) { 10, 20 }