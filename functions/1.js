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