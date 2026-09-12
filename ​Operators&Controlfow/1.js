//১. Conditionals (শর্ত সাপেক্ষে কোড চালানো)
//if-else (যদি-অন্যথায়) নির্দিষ্ট কোনো শর্ত সত্য (true) নাকি মিথ্যা (false) তার ওপর ভিত্তি করে কাজ করার জন্য if-else ব্যবহার করা হয়।

let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}
//output: You are eligible to vote.


//Ternary Operator (if-else এর সংক্ষিপ্ত রূপ)
//এক লাইনে ছোট শর্ত লেখার জন্য Ternary Operator (? :) খুব উপযোগী। শর্ত ? সত্য হলে এটা : মিথ্যা হলে এটা - এই নিয়ম মেনে এটি কাজ করে।

let ages = 20;
let message = (age >= 18) ? "adult" : "not an adult";

console.log(message); // Output: adult