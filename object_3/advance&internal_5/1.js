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