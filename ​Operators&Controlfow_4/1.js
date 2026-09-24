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



//Ternary Operator (if-else এর সংক্ষিপ্ত রূপ)
//এক লাইনে ছোট শর্ত লেখার জন্য Ternary Operator (? :) খুব উপযোগী।

let day = "Monday";

switch (day) {
  case "Sunday":
    console.log("আজ ছুটির দিন!");
    break;
  case "Monday":
    console.log("আজ সপ্তাহের প্রথম কর্মদিবস।");
    break;
  default:
    console.log("সাধারণ একটি দিন।");
}


//২. Loops (একই কাজ বারবার করা)
//for Loop (যখন লুপের সংখ্যা জানা থাকে)
//আপনি কতবার লুপটি চালাতে চান তা জানা থাকলে for loop ব্যবহার করা হয়।



// ১ থেকে ৫ পর্যন্ত প্রিন্ট করা
for (let i = 1; i <= 5; i++) {
  console.log("সংখ্যা: " + i);
}


//while Loop (যতক্ষণ শর্ত সত্য থাকবে)
//নির্দিষ্ট একটি শর্ত যতক্ষণ সত্য (true) থাকবে, ততক্ষণ এই লুপ চলতে থাকবে।


let count = 1;

while (count <= 3) {
  console.log("কাউন্ট: " + count);
  count++; // শর্ত শেষ করার জন্য মান বাড়ানো হচ্ছে
}

//for...of Loop (Array বা লিস্টের উপাদানের জন্য)
//কোনো Array (তালিকা) বা String-এর প্রতিটি উপাদানের ওপর দিয়ে একে একে লুপ চালাতে এটি খুব সহজ ও সুন্দর।


let fruits = ["আম", "জাম", "কাঁঠাল"];

for (let fruit of fruits) {
  console.log(fruit);
}