//1. অবজেক্টের ভেতরে অবজেক্ট (Object inside Object)
//ধরা যাক, একজন ইউজারের নাম এবং বয়স আছে, আর তার ঠিকানার (Address) তথ্যগুলো আরেকটা ছোট অবজেক্ট আকারে ভেতরে রাখা আছে।
const user = {
    name: "Sakib",
    age: 24,
    // অবজেক্টের ভেতর অবজেক্ট
    address: {
        city: "Dhaka",
        area: "Mirpur",
        postalCode: 1216
    }
};
//🔍 কীভাবে এক্সেস (Read) করবেন? পর পর ডট (.) বসিয়ে ভেতরে ঢুকে ডেটা পড়তে হয়:
// ১. শহর (City) প্রিন্ট করা
console.log(user.address.city); // Output: Dhaka

// ২. এরিয়া (Area) প্রিন্ট করা
console.log(user.address.area); // Output: Mirpur

//add new data
// শহর পরিবর্তন করা
user.address.city = "Chittagong";

// address-এর ভেতরে নতুন প্রপার্টি 'road' যোগ করা
user.address.road = "Road 11";

console.log(user.address);
// Output: { city: 'Chittagong', area: 'Mirpur', postalCode: 1216, road: 'Road 11' }

// 2. অবজেক্টের ভেতরে অ্যারে (Array inside Object)
// যখন কোনো প্রপার্টিতে একটার বেশি মান (List/Collection) থাকে, তখন আমরা অ্যারে ব্যবহার করি।
const student = {
    id: 101,
    name: "Tanvir",
    // অবজেক্টের ভেতর অ্যারে
    skills: ["HTML", "CSS", "JavaScript", "React"]
};

//🔍 কীভাবে এক্সেস করবেন?
//অ্যারের মান এক্সেস করতে ইণ্ডেক্স (Index [0], [1], [2]) ব্যবহার করতে হয়:
// ১. প্রথম Skill পড়া (ইন্ডেক্স 0)
console.log(student.skills[0]); // Output: HTML

// ২. ৩ নম্বর Skill (JavaScript) পড়া (ইন্ডেক্স 2)
console.log(student.skills[2]); // Output: JavaScript

//মেথড push() অ্যারেতে নতুন ডেটা যোগ করা যায়
student.skills.push("Node.js");
console.log(student.skills); 
// Output: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

// রিয়েল-লাইফ মাস্টার উদাহরণ (Complex Nested Object)
const eShopProduct = {
    id: 99,
    title: "Wireless Mouse",
    price: 1200,
    // অবজেক্ট
    seller: {
        name: "Tech Shop BD",
        rating: 4.8
    },
    // অ্যারে
    colors: ["Black", "Silver"],
    // অ্যারের ভেতরে অবজেক্ট (Reviews)
    reviews: [
        { reviewer: "Rahim", comment: "Awesome product!", stars: 5 },
        { reviewer: "Karim", comment: "Good, but slow delivery.", stars: 3 }
    ]
};

//রিয়েল-লাইফ মাস্টার উদাহরণ 2
const myLaptop = {
    brand: "HP",
    price: 75000,
    //object
    about: {
        Ram: "16GB",
        Processor: 'AMD 7',
    },

    features: ["blutooth", "webcam", "tuchscreen"]
};
console.log(myLaptop.about.Processor);
