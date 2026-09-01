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