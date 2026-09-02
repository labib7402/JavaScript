//1. Object Destructuring (সহজে প্রপার্টি বের করা)

const user = { name: "Sakib", age: 25, city: "Dhaka" };

// সাধারণ নিয়ম: const name = user.name;
// ES6 Destructuring:
const { name, age, city } = user;
console.log(name, age); // Output: Sakib 25

// নাম পরিবর্তন (Alias) ও Default value সেট করা:
const { name: userName, country = "Bangladesh" } = user;               // const user = {} দিয়ে অবজেক্ট তৈরি করা হয়, আর
console.log(userName, country); // Output: Sakib Bangladesh            // const {} = user দিয়ে অবজেক্টের ভেতরের জিনিস বের করা হয়।


//2. property shorthand & computed property names
//ভেরিয়াবলের নাম ও Key-এর নাম একই হলে সংক্ষেপে লেখা যায় এবং [] দিয়ে ডাইনামিক Key তো তৈরি করা যায়।
const role = "admin";
const keyName = "status";

const currentUser = {
    role,                 // Property Shorthand (role: role না লিখে শুধু role)
    [keyName]: "Active"   // Computed Property Name (ডাইনামিক key)
};

console.log(currentUser); 
// Output: { role: 'admin', status: 'Active' }




//3. Spread Operator (...) (অবজেক্ট মার্জ ও কপি)
//তিনটি ডট (...) দিয়ে একটি অবজেক্টের সব প্রপার্টি অন্য অবজেক্টে ছড়িয়ে দেওয়া যায়।

const basicInfo = { name: "Tamim", age: 30 };
const jobInfo = { designation: "Developer", salary: 50000 };

// দুটি অবজেক্ট মার্জ (Merge) করা এবং নতুন মান যোগ করা
const fullProfile = { 
    ...basicInfo, 
    ...jobInfo, 
    location: "Chittagong" 
};

console.log(fullProfile);

//4. Shallow Copy vs Deep Copy (সবচেয়ে গুরুত্বপূর্ণ)
//JavaScript-এ অবজেক্ট হলো Pass-by-Reference। অর্থাৎ const b = a লিখলে অবজেক্ট কপি হয় না, কেবল মেমোরি অ্যাড্রেস শেয়ার হয়।

const original = { name: "Rahim", address: { city: "Dhaka" } };

// ❌ ভুল কপি (সরাসরি রেফারেন্স কপি):
const wrongCopy = original;
wrongCopy.name = "Karim"; 
// এতে original.name-ও "Karim" হয়ে যাবে!

//Shallow Copy (উপরে কপি, ভেতরে রেফারেন্স):
//Spread Operator ({ ...original }) বা Object.assign({}, original) দিয়ে কপি করলে উপরের প্রপার্টি আলাদা হয়,
// কিন্তু ভেতরে নেস্টেড অবজেক্ট (address) থেকে গেলে সেটি আগের রেফারেন্সেই রয়ে যায়।

const shallowCopy = { ...original };
shallowCopy.address.city = "Sylhet"; 

console.log(original.address.city); // Output: Sylhet (original-ও বদলে গেছে!)