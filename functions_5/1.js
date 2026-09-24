// 1. ফাংশন তৈরির মূল গঠন (Syntax)
//ফাংশন তৈরি করতে function কিওয়ার্ডটি ব্যবহার করা হয়:


function functionName(parameter1, parameter2) {
    // এখানে যে কাজ করানো হবে তার কোড থাকবে
    return result; // (ঐচ্ছিক) কোনো মান ফেরত পাঠাতে চাইলে
}





//2. সাধারণ একটি ফাংশন (Basic Function)
//নিচে একটি সাধারণ ফাংশনের উদাহরণ দেওয়া হলো যা কেবল একটি বার্তা প্রিন্ট করে:

// a. ফাংশন ঘোষণা (Function Declaration)
function sayHello() {
    console.log("হ্যালো! JavaScript-এ স্বাগতম।");
}

// b. ফাংশন কল (Function Call / Invocation)
sayHello(); // আউটপুট: হ্যালো! JavaScript-এ স্বাগতম।




//3. প্যারামিটার ও আর্গুমেন্ট (Parameters and Arguments)
//ফাংশনে বাহির থেকে ডাটা বা মান পাঠাতে Parameters এবং Arguments ব্যবহার করা হয়।

// name হলো Parameter
function greetUser(name) {
    console.log("স্বাগতম, " + name + "!");
}

// "রাহাত" এবং "নাসরিন" হলো Arguments
greetUser("রাহাত");  // আউটপুট: স্বাগতম, রাহাত!
greetUser("নাসরিন"); // আউটপুট: স্বাগতম, নাসরিন!




// 4. return কিওয়ার্ডের ব্যবহার
//একটি ফাংশন হিসাব-নিকাশ শেষে মূল কোডে কোনো মান ফেরত দিতে return ব্যবহার করে। return এক্সিকিউট হওয়ার সাথে সাথে ফাংশনের কাজ শেষ হয়ে যায়।

function addNumbers(a, b) {
    let sum = a + b;
    return sum; // মান ফেরত পাঠাচ্ছে
}

// ফাংশন কল করে রিটার্ন করা মান একটি ভ্যারিয়েবলে রাখা হলো
let result = addNumbers(10, 20);
console.log("যোগফল:", result); // আউটপুট: যোগফল: 30




//5 ৫. JavaScript-এ ফাংশন লেখার আধুনিক উপায়ে (Arrow Function)
//ES6 ভার্সনে ফাংশন লেখার একটি সংক্ষিপ্ত ও আধুনিক নিয়ম যুক্ত হয়েছে, যাকে Arrow Function বলা হয়।

function multiply(x, y) {
    return x * y;
}

//Arrow Function দিয়ে সংক্ষেপে:
const multiply = (x, y) => x * y;

console.log(multiply(5, 4)); // আউটপুট: 20