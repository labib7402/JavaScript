//1. Object.freeze() (সম্পূর্ণ লক করা)

const user = { name: "Sakib", role: "Admin" };

// অবজেক্ট ফ্রিজ করা
Object.freeze(user);

user.role = "Editor";    // কাজ করবে না (পরিবর্তন হবে না)
user.age = 25;           // কাজ করবে না (নতুন প্রপার্টি যোগ হবে না)
delete user.name;        // কাজ করবে না (ডিলিট হবে না)

console.log(user); 
// Output: { name: 'Sakib', role: 'Admin' }

//2. Object.seal() (নতুন প্রপার্টি যোগ বিদ্যমান প্রপার্টি ডিলিট করা যাবে না, কিন্তু মান পরিবর্তন করা যাবে)
const settings = { theme: "dark", fontSize: 16 };

Object.seal(settings);

settings.fontSize = 18;  // ✅ কাজ করবে! (মান আপডেট হবে)
settings.language = "bn"; // ❌ কাজ করবে না (নতুন প্রপার্টি যোগ হবে না)
delete settings.theme;   // ❌ কাজ করবে না (ডিলিট হবে না)

console.log(settings); 
// Output: { theme: 'dark', fontSize: 18 }
