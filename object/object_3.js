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